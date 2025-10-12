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

Characterizing Sleep Spindle Temporal Dynamics
------

Sleep spindles are cortical electrical waveforms observed during NREM sleep, considered critical for memory consolidation and sleep stability. Numerous studies have demonstrated that spindle activity is influenced by sleep stage, cortical up/down-states (slow oscillation), and infraslow activity. Despite these known dynamics, the relative contribution of each factor in modulating spindle acitivity is unknown. Moreover, standard analyses almost universally report an average spindle rate (known as spindle density) ignoring timing patterns completely. Without a systematic characterization of spindle dynamics, our ability to identify biomarkers for aging and disordered conditions remains critically limited.

In this work (Chen et al., 2025), using a rigorous statistical framework based on point process theory, we demonstrate that individualized temporal patterns are the dominant determinant of spindle timing, whereas sleep depth, cortical up/down-state, and long-term (infraslow) pattern, features thought to be primary drivers of spindle occurrence, are less important. This study provides a new lens on spindle production mechanisms, which will allow studies of the role of spindle timing patterns in memory consolidation, aging, and disease.

For more details, check the online toolbox [here](https://prerau.bwh.harvard.edu/sleep-spindle-dynamics-toolbox/), which is in companion to the paper:

----
> **Shuqiang Chen**, Mingjian He, Uri T. Eden, Michael J. Prerau. [Individualized temporal patterns drive human sleep spindle timing](https://github.com/ShuqiangChen/ShuqiangChen.github.io/blob/master/files/Chen_spindle_dynamics_PNAS2025.pdf). Proc Natl Acad Sci U S A (2025);122(2):e2405276121. doi: 10.1073/pnas.2405276121. 
----


Sleep Apnea Dynamics
------

## 1. Estimating AHI Uncertainty

Obstructive sleep apnea (OSA), characterized by reduced or ceased breathing during sleep, affects over 10% of the population and is linked to numerous comorbidities. Its severity and treatment eligibility are determined by the apnea–hypopnea index (AHI), the average rate of respiratory events per hour of sleep. AHI is clinically treated as an exact point estimate with no measure of statistical uncertainty, leaving current practice unable to account for variability in diagnosis or treatment eligibility due to chance. Here, we quantify this uncertainty and assess its impact on clinical decision-making.

We estimate AHI uncertainty using both a non-parametric bootstrap based on inter-event times and a theoretical Poisson model reflecting the index’s current formulation, applying these approaches to data from 2,049 participants (954 M / 1,095 F; mean age 69 ± 9.1) in the Multi-Ethnic Study of Atherosclerosis (MESA). Our findings show that the uncertainty in AHI is substantial relative to the clinical thresholds, highlighting the limitations of relying solely on a single number for diagnosis. Incorporating uncertainty and additional patient data into clinical decision-making is therefore essential to improve the accuracy of diagnosis and treatment eligibility.

For more details, check the online toolbox [here](https://prerau.bwh.harvard.edu/ahi-overview/), which is in companion to the paper:

----
> Thomas RJ, **Chen S**, Eden UT, Prerau MJ. [Quantifying statistical uncertainty in metrics of sleep disordered breathing](https://github.com/ShuqiangChen/ShuqiangChen.github.io/blob/master/files/SDB_uncertainty_Thomas2020_SleepMed.pdf). Sleep Medicine. 2020 Jan;65:161-169. doi: 10.1016/j.sleep.2019.06.003.
---


## 2. Sleep Apnea Temporal Dynamics

The AHI has been shown to be a poor descriptor of OSA. As a simple average respiratory event rate, it fails to capture the rich temporal structure and dynamic properties of these events, which vary continuously with factors such as body position, sleep stage, and prior respiratory activity. Here, we develop a statistical modeling framework based on point process theory that quantifies the relative influence of these factors on the moment-to-moment probability of event occurrence. This approach generates a highly individualized respiratory “fingerprint” capable of accurately predicting the precise timing of future events and reveals robust differences by age, sex, and race in a large population. Together, these advances offer a more detailed and dynamic characterization of OSA at both individual and population levels, with significant potential to improve patient phenotyping and outcome prediction.

For more details, check the online toolbox [here](https://prerau.bwh.harvard.edu/sleep-apnea-dynamics-toolbox/), which is in companion to the paper:

---
> **Shuqiang Chen**, Susan Redline, Uri T. Eden and Michael J. Prerau. [Dynamic Models of Obstructive Sleep Apnea Provide Robust Prediction of Respiratory Event Timing and a Statistical Framework for Phenotype Exploration](https://github.com/ShuqiangChen/ShuqiangChen.github.io/blob/master/files/Chen_apnea_dynamics_Sleep2022.pdf). Sleep. 2022 Aug 6:zsac189. doi: 10.1093/sleep/zsac189.
---



