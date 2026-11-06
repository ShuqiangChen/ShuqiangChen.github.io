// Research Theme figure.
// Hover or keyboard focus previews a view after a short delay. Click, Enter, Space or tap
// pins it. Overview, the close button, Escape or repeating the click return to the overview.
(function () {
  var fig = document.querySelector(".fig");
  if (!fig) return;

  var SHOW_DELAY = 150;
  var LEAVE_DELAY = 220;
  var triggers = Array.prototype.slice.call(fig.querySelectorAll("[data-target]"));
  var panels = Array.prototype.slice.call(fig.querySelectorAll("[data-panel]"));
  var panelBox = fig.querySelector(".fig-panels");
  var closeBtn = fig.querySelector(".fig-close");
  var status = fig.querySelector("[data-status]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  var pinned = null; // the trigger element holding a view open
  var showTimer = null;
  var leaveTimer = null;

  function stopTimers() {
    clearTimeout(showTimer);
    clearTimeout(leaveTimer);
  }

  function render(target, source) {
    fig.setAttribute("data-state", target);
    panels.forEach(function (panel) {
      panel.classList.toggle("is-active", panel.getAttribute("data-panel") === target);
    });
    triggers.forEach(function (trigger) {
      var isTarget = trigger.getAttribute("data-target") === target;
      trigger.classList.toggle("is-hot", !!source && trigger === source);
      if (trigger.tagName === "BUTTON") {
        trigger.classList.toggle("is-current", isTarget);
      }
      trigger.setAttribute("aria-pressed", trigger === pinned ? "true" : "false");
    });
    closeBtn.hidden = !pinned;
  }

  function restingView() {
    if (pinned) render(pinned.getAttribute("data-target"), pinned);
    else render("overview", null);
  }

  function announce(target) {
    var panel = fig.querySelector('[data-panel="' + target + '"]');
    if (panel) {
      status.textContent = panel.querySelector("h4").textContent + ". " + panel.querySelector(".fig-q").textContent;
    }
  }

  function preview(trigger) {
    stopTimers();
    showTimer = setTimeout(function () {
      render(trigger.getAttribute("data-target"), trigger);
    }, SHOW_DELAY);
  }

  function scheduleRest() {
    clearTimeout(showTimer);
    clearTimeout(leaveTimer);
    leaveTimer = setTimeout(restingView, LEAVE_DELAY);
  }

  function clearPin() {
    stopTimers();
    pinned = null;
    render("overview", null);
    announce("overview");
  }

  function pin(trigger, viaPointer) {
    stopTimers();
    if (trigger === pinned || trigger.getAttribute("data-target") === "overview") {
      clearPin();
      return;
    }
    pinned = trigger;
    render(trigger.getAttribute("data-target"), trigger);
    announce(trigger.getAttribute("data-target"));
    // On a phone the panel sits under the diagram, so bring it into view.
    if (viaPointer === "touch") {
      panelBox.scrollIntoView({ block: "nearest", behavior: reduceMotion.matches ? "auto" : "smooth" });
    }
  }

  var lastPointerType = "mouse";

  triggers.forEach(function (trigger) {
    trigger.addEventListener("pointerdown", function (event) {
      lastPointerType = event.pointerType;
    });
    trigger.addEventListener("pointerenter", function (event) {
      if (event.pointerType === "mouse") preview(trigger);
    });
    trigger.addEventListener("pointerleave", function (event) {
      if (event.pointerType === "mouse") scheduleRest();
    });
    trigger.addEventListener("focus", function () {
      if (trigger.matches(":focus-visible")) preview(trigger);
    });
    trigger.addEventListener("blur", scheduleRest);
    trigger.addEventListener("click", function () {
      pin(trigger, lastPointerType);
    });
    if (trigger.tagName !== "BUTTON") {
      trigger.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          pin(trigger, "keyboard");
        }
      });
    }
  });

  // Let the pointer travel into the panel without closing it.
  panelBox.addEventListener("pointerenter", function (event) {
    if (event.pointerType === "mouse") stopTimers();
  });
  panelBox.addEventListener("pointerleave", function (event) {
    if (event.pointerType === "mouse") scheduleRest();
  });

  closeBtn.addEventListener("click", function () {
    var returnTo = pinned;
    clearPin();
    if (returnTo) returnTo.focus({ preventScroll: true });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && (pinned || fig.getAttribute("data-state") !== "overview")) {
      clearPin();
    }
  });

  // A short tour, once per visit, so people can see that the figure responds.
  // It waits until the diagram is on screen and ends the moment anyone interacts.
  var TOUR = ["brain", "heart", "resp", "shared"];
  var TOUR_START_DELAY = 400;
  var TOUR_STEP = 1500;
  var TOUR_KEY = "researchFigureTourSeen";
  var tourTimer = null;
  var touring = false;
  var observer = null;

  function tourSeen() {
    try {
      return sessionStorage.getItem(TOUR_KEY) === "1";
    } catch (error) {
      return false;
    }
  }

  function markTourSeen() {
    try {
      sessionStorage.setItem(TOUR_KEY, "1");
    } catch (error) {
      // Without storage the tour may replay on the next page load, which is harmless.
    }
  }

  function endTour() {
    clearTimeout(tourTimer);
    if (observer) observer.disconnect();
    observer = null;
    fig.removeEventListener("pointerenter", endTour);
    fig.removeEventListener("pointerdown", endTour);
    fig.removeEventListener("focusin", endTour);
    document.removeEventListener("keydown", endTour);
    if (touring) {
      touring = false;
      restingView();
    }
  }

  function tourStep(index) {
    if (index >= TOUR.length) {
      endTour();
      return;
    }
    var target = TOUR[index];
    render(target, fig.querySelector('.node[data-target="' + target + '"]'));
    tourTimer = setTimeout(function () {
      tourStep(index + 1);
    }, TOUR_STEP);
  }

  function startTour() {
    markTourSeen();
    touring = true;
    tourStep(0);
  }

  if (!tourSeen() && !reduceMotion.matches && "IntersectionObserver" in window) {
    fig.addEventListener("pointerenter", endTour);
    fig.addEventListener("pointerdown", endTour);
    fig.addEventListener("focusin", endTour);
    document.addEventListener("keydown", endTour);

    observer = new IntersectionObserver(function (entries) {
      var ratio = entries[entries.length - 1].intersectionRatio;
      if (touring) {
        if (ratio < 0.2) endTour();
        return;
      }
      clearTimeout(tourTimer);
      if (ratio >= 0.8 && !fig.matches(":hover") && !pinned) {
        tourTimer = setTimeout(startTour, TOUR_START_DELAY);
      }
    }, { threshold: [0.2, 0.8] });
    observer.observe(fig.querySelector(".fig-net"));
  }
})();
