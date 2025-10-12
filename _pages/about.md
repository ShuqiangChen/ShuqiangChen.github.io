---
permalink: /
title: "Welcome to Shuqiang's Homepage"
excerpt: "ShuqiangChen"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


I am a postdoctoral research fellow in the Division of Sleep Medicine at Harvard Medical School and Brigham and Women’s Hospital. I am fortunate to be mentored by Dr. [Michael Prerau](https://prerau.bwh.harvard.edu) and Dr. [Uri Eden](https://www.bu.edu/math/profile/uri-eden/), whose mentorship has guided and shaped my growth from doctoral training through postdoctoral research.

Research 
======
My research lies at the intersection of sleep medicine, neuroscience, and statistical modeling, with a focus on how brain dynamics during sleep shape health and aging, regulate brain–body interactions, and reveal mechanisms underlying neurological and psychiatric dysfunction. Leveraging advanced computational approaches, my work seeks to uncover individualized neural signatures and identify biomarkers that advance diagnosis and treatment.

Sleep Spindle Dynamics
------

Sleep spindles are cortical electrical waveforms observed during sleep, considered critical for memory consolidation and sleep stability. Abnormalities in sleep spindles have been found in neuropsychiatric disorders and aging and suggested to contribute to functional deficits. Numerous studies have demonstrated that spindle activity dynamically and continuously evolves over time and is mediated by a variety of intrinsic and extrinsic factors including sleep stage, slow oscillation (SO) activity (0.5 – 1.5 Hz), and infraslow activity. Despite these known dynamics, the relative influences on the moment-to-moment likelihood of a spindle event occurring at a specific time are not well-characterized. Moreover, standard analyses almost universally report average spindle rate (known as spindle density) over fixed stages or time periods—thus ignoring timing patterns completely. Without a systematic characterization of spindle dynamics, our ability to identify biomarkers for aging and disordered conditions remains critically limited.

In this work (Chen et al., 2025), using a rigorous statistical framework based on point process theory, we demonstrate that individualized temporal patterns are the dominant determinant of spindle timing, whereas sleep depth, cortical up/down-state, and long-term (infraslow) pattern, features thought to be primary drivers of spindle occurrence, are less important. This study provides a new lens on spindle production mechanisms, which will allow studies of the role of spindle timing patterns in memory consolidation, aging, and disease.

----
> **Shuqiang Chen**, Mingjian He, Uri T. Eden, Michael J. Prerau. [Individualized temporal patterns drive human sleep spindle timing](https://github.com/ShuqiangChen/ShuqiangChen.github.io/blob/master/files/SDB_uncertainty_Thomas2020_SleepMed.pdf). Proc Natl Acad Sci U S A (2025);122(2):e2405276121. doi: 10.1073/pnas.2405276121. 
----


Sleep Apnea Dynamics
------

## 1. Estimating AHI Uncertainty

The apnea-hypopnea index (AHI) (or one of its derivatives) is the primary clinical metric for characterizing sleep disordered breathingdthe value of which with respect to a threshold determines severity of diagnosis and eligibility for treatment reimbursement. The index value, however, is taken as a perfect point estimate, with no measure of statistical uncertainty. Thus, current practice does not robustly account for variability in diagnosis/eligibility due to chance. In this paper, we quantify the statistical uncertainty associated with respiratory event indices for sleep disordered breathing and the effect of uncertainty on treatment eligibility.

We develop an empirical estimate of uncertainty using a non-parametric bootstrap on the interevent times, as well as a theoretical Poisson estimate reflecting the current formulation of the AHI. We then apply these methods to estimate AHI uncertainty for 2049 subjects (954/1095 M/F, age: mean 69 ± 9.1) from the Multi-Ethnic Study of Atherosclerosis (MESA).

This study shows that capturing uncertainty in AHI and related metrics is key to understanding patient diagnosis and as well as the effects of treatment. The statistical uncertainty in AHI is vast compared to the clinical thresholds, so it is therefore insufficient to rely on the relationship between a single number and threshold alone. Thus, new strategies must be developed to incorporate uncertainty, as well other available data, into clinical decision-making.

For more details, check the online toolbox [here](https://prerau.bwh.harvard.edu/ahi-overview/), which is a companion to the paper:

----
> Thomas RJ, **Chen S**, Eden UT, Prerau MJ. [Quantifying statistical uncertainty in metrics of sleep disordered breathing](https://github.com/ShuqiangChen/ShuqiangChen.github.io/blob/master/files/SDB_uncertainty_Thomas2020_SleepMed.pdf). Sleep Medicine. 2020 Jan;65:161-169. doi: 10.1016/j.sleep.2019.06.003.
---


## 2. Apnea History Dependence

Obstructive sleep apnea (OSA), in which breathing is reduced or ceased during sleep, affects at least 10% of the population and is associated with numerous comorbidities. Current clinical diagnostic approaches characterize severity and treatment eligibility using the average respiratory event rate over total sleep time (apnea hypopnea index, or AHI). This approach, however, does not characterize the time-varying and dynamic properties of respiratory events that can change as a function of body position, sleep stage, and previous respiratory event activity. Here, we develop a statistical model framework based on point process theory that characterizes the relative influences of all these factors on the moment-to-moment rate of event occurrence.

This model acts as a highly individualized respiratory fingerprint, which we show can accurately predict the precise timing of future events. We also demonstrate robust model differences in age, sex, and race across a large population. Overall, this approach provides a substantial advancement in OSA characterization for individuals and populations, with the potential for improved patient phenotyping and outcome prediction.

For more details, check the online toolbox [here](https://github.com/preraulab/Apnea_dynamics_toolbox), which is a companion to the paper:

---
> **Shuqiang Chen**, Susan Redline, Uri T. Eden and Michael J. Prerau. [Dynamic Models of Obstructive Sleep Apnea Provide Robust Prediction of Respiratory Event Timing and a Statistical Framework for Phenotype Exploration](https://github.com/ShuqiangChen/ShuqiangChen.github.io/blob/master/files/Apnea_Dynamics_Chen_2022Sleep.pdf). Sleep. 2022 Aug 6:zsac189. doi: 10.1093/sleep/zsac189.
---



