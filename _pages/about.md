---
permalink: /
title: "Welcome to Shuqiang's Homepage"
excerpt: "ShuqiangChen"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


I am a PhD student in neuroscience (computational track) at Boston Univeristy, mentored by Drs. [Uri Eden](https://www.bu.edu/math/people/faculty/probability-and-statistics/eden/) and [Michael Prerau](https://prerau.bwh.harvard.edu) (BWH).

Research 
======
My research focuses on developing and applying statistical approaches to analyze neural data. In particular, I'm interested in sleep, memory and brain rhythms.

Sleep Spindle Dynamics
------

Sleep spindles, transient oscillatory waveforms in the sleep electroencephalogram (EEG), have been linked to numerous factors in health and disease, including memory consolidation, neurological dysfunction and disorders, and natural aging. Spindle activity is known to continuously evolve over time as a function of sleep stage, slow oscillation (SO) activity, and other covariates. Typical sleep spindle analyses, however, focus on differences in average spindle density (event rate), ignoring rich information about spindle dynamics and limiting their potential use as a clinical EEG biomarker. 

Here, we aim to develop a statistical modeling framework based on point process theory which allows us to characterize temporal patterns of spindles unique to individuals, as well as patterns common across populations. By doing so, we can evaluate the relative influences of multiple factors on the moment-to-moment rate of spindle events. We apply this framework to large cross-sectional databases of heterogeneous general population data and to clinical databases of patients with neurological disorders. Our results show that most adults have a characteristic event pattern that involves a refractory period followed by a period of increased probability of spindle occurrence. This event pattern varies substantially from subject to subject, but night-to-night variability within subjects is small. An analysis of spindles/SO coupling corroborated previous studies showing shifts in preferred phase with age, while providing a novel characterization of shifts in preferential phase with depth of sleep. 

Statistical goodness- of-fit analysis suggests consistent and substantial improvements in our ability to predict individual spindle times over current approaches. Overall, we demonstrate a more statistically robust approach to characterizing sleep spindle dynamics, which provides key insights into the mechanisms of healthy aging and neuropathology and can potentially serve as a robust biomarker for neurological disorders.

#### > Abstract accepted by SfN 2022, for latest updates, welcome to check out our poster titled "Quantitative characterization of sleep spindle dynamics" in Nov. at San Diego.
---


Sleep Apnea Dynamics
------

## Estimating AHI Uncertainty

The apnea-hypopnea index (AHI) (or one of its derivatives) is the primary clinical metric for characterizing sleep disordered breathingdthe value of which with respect to a threshold determines severity of diagnosis and eligibility for treatment reimbursement. The index value, however, is taken as a perfect point estimate, with no measure of statistical uncertainty. Thus, current practice does not robustly account for variability in diagnosis/eligibility due to chance. In this paper, we quantify the statistical uncertainty associated with respiratory event indices for sleep disordered breathing and the effect of uncertainty on treatment eligibility.

We develop an empirical estimate of uncertainty using a non-parametric bootstrap on the interevent times, as well as a theoretical Poisson estimate reflecting the current formulation of the AHI. We then apply these methods to estimate AHI uncertainty for 2049 subjects (954/1095 M/F, age: mean 69 ± 9.1) from the Multi-Ethnic Study of Atherosclerosis (MESA).

This study shows that capturing uncertainty in AHI and related metrics is key to understanding patient diagnosis and as well as the effects of treatment. The statistical uncertainty in AHI is vast compared to the clinical thresholds, so it is therefore insufficient to rely on the relationship between a single number and threshold alone. Thus, new strategies must be developed to incorporate uncertainty, as well other available data, into clinical decision-making.

For more details, check the online toolbox [here](https://prerau.bwh.harvard.edu/ahi-overview/), which is a companion to the paper:

#### > Thomas RJ, **Chen S**, Eden UT, Prerau MJ. [Quantifying statistical uncertainty in metrics of sleep disordered breathing](https://github.com/ShuqiangChen/ShuqiangChen.github.io/blob/master/files/SDB_uncertainty_Thomas2020_SleepMed.pdf). Sleep Medicine. 2020 Jan;65:161-169. doi: 10.1016/j.sleep.2019.06.003.
---


## Apnea History Dependence

Obstructive sleep apnea (OSA), in which breathing is reduced or ceased during sleep, affects at least 10% of the population and is associated with numerous comorbidities. Current clinical diagnostic approaches characterize severity and treatment eligibility using the average respiratory event rate over total sleep time (apnea hypopnea index, or AHI). This approach, however, does not characterize the time-varying and dynamic properties of respiratory events that can change as a function of body position, sleep stage, and previous respiratory event activity. Here, we develop a statistical model framework based on point process theory that characterizes the relative influences of all these factors on the moment-to-moment rate of event occurrence.

This model acts as a highly individualized respiratory fingerprint, which we show can accurately predict the precise timing of future events. We also demonstrate robust model differences in age, sex, and race across a large population. Overall, this approach provides a substantial advancement in OSA characterization for individuals and populations, with the potential for improved patient phenotyping and outcome prediction.

For more details, check the online toolbox [here](https://github.com/preraulab/Apnea_dynamics_toolbox), which is a companion to the paper:

#### > **Shuqiang Chen**, Susan Redline, Uri T. Eden and Michael J. Prerau. [Dynamic Models of Obstructive Sleep Apnea Provide Robust Prediction of Respiratory Event Timing and a Statistical Framework for Phenotype Exploration](https://github.com/ShuqiangChen/ShuqiangChen.github.io/blob/master/files/Apnea_Dynamics_Chen_2022Sleep.pdf). Sleep. 2022 Aug 6:zsac189. doi: 10.1093/sleep/zsac189.
---



