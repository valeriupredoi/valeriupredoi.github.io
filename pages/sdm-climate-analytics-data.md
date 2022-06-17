---
layout: page
title: Climate Analytics Service
# subheadline: ISENES3 Key Workshops
# teaser: "ISENES3 workshops are wonderous."
header:
   image_fullwidth: "header_homepage_13.jpg"
permalink: "/sdm-climate-analytics-data/"
categories:
    - design
tags:
    - design
    - background color
    - header
#header:
    #background-color: "#186F4D"
header:
    title: "Climate <br> Analytics Service"
    background-color: "#186F4D;"
    #caption: This is a caption for the header image with link
    #caption_url: https://unsplash.com/
    image_fullwidth: "Banner_website_IS-ENES3.png"

---

The ENES Climate Analytics Service (ECAS) provides free of charge access to server-side near-data processing capabilities through four different installations hosted at [DKRZ](https://www.dkrz.de/de), [CMCC](https://www.cmcc.it/), [CNRS-IPSL](https://www.ipsl.fr/en/) and [UKRI](https://www.ukri.org/)-[CEDA](https://www.ceda.ac.uk/) premises, which offer a virtual climate research environment for Jupyter notebooks and parallel back-end compute capabilities.

| **News!
Find the link to the scripts and the recordings of the demos in the page of our [last online training](https://valeriupredoi.github.io/workshops-detailed#compute-analytics).** |

The ECAS integrates data and tools for scientific data analysis, manipulation and visualization, offering access to CMIP5, CMIP6 as well as CORDEX datasets from ESGF. Look at the benefits:

- **Compute-to-data: no more heavy data transfer**
- **Universal availability: log in wherever you are and no need to back up**
- **Parallel processing: to compute faster** 

You just need internet access to log in, there is nothing to install, we make the data, the software, and the hardware ready for you!

The ECAS is a service with institutional-based deployments addressing national requirements and needs with four instances: DKRZ, CMCC, IPSL and UKRI/CEDA, which represent different technical implementations (or *flavours*). Find below a short description about the four ENES climate analytics service facilities at:
- **[DKRZ](#cas-dkrz)**
- **[CMCC](#cas-cmcc)**
- **[UKRI/CEDA](#cas-ukri)**
- **[CNRS-IPSL](#cas-ipsl)**

Visit the service FAQs [PAGE TO BE CREATED] and find our contact and the link to use cases.

**Important note**: unfortunately we cannot offer unlimited resources. The ECAS only provides computer resources for pre- and post-processing (not suitable for simulation runs) in shared computing nodes. If you would like to use exclusive extensive resources, please apply to our Analysis Platforms service. 

Find training material and useful scripts [here](https://github.com/IS-ENES-Data/Climate-data-analysis-service) and the list of recorded videos of the demos in the IS-ENES3 Youtube channel [here](https://www.youtube.com/playlist?list=PLFvev1W5vG7P1VGITP3ys1GpXnhL--jIc).

<hr style="border:2px solid gray">

### <a name="cas-dkrz"></a> ENES Climate Analytics Service at DKRZ
 
The ECAS at DKRZ is a free of charge server-side data-near processing service based on Jupyter notebooks (where Python is promoted, but you can also use R and Julia) to directly load and process CMIP and other climate data. The DKRZ ECAS is hosted at the [DKRZ Jupyterhub](https://jupyterhub.dkrz.de), which offers:
- support for fast computations provided via the [Xarray](https://xarray.pydata.org/en/stable/) Python package for labelled multi-dimensional arrays, which is particularly tailored to working with [NetCDF](https://www.unidata.ucar.edu/software/netcdf/) files, and integrates tightly with [Dask](https://www.dask.org/) for parallel computing, and
- direct access to the [CMIP data pool](https://docs.dkrz.de/doc/index.html), that we update and maintain, because DKRZ is an ESGF data node, and it is easily accessible via the [Intake](https://intake.readthedocs.io/en/latest/) Python package.
- support for [ESMValTool](https://www.esmvaltool.org/) - a community diagnostic and performance metrics tool for routine evaluation of Earth system models in CMIP. Please have a look at the [example notebooks](https://github.com/ESMValGroup/ESMValTool-JupyterLab). 
Visit our [use cases repository](https://github.com/IS-ENES-Data/Climate-data-analysis-service) where we demonstrate how to use ECAS resources. There is for instance the Jupyter notebook of the Summer Days Climate Index calculation with CMIP6 using Intake and Xarray that we introduce in the following 4 steps Quick Start (click on the images to enlarge them):

GIF IMAGES

**Mandatory items to add in the description (step 2 in the Quick Start above)**: when you request to join project 1088, please specify the following:
1. "I apply to be a user of the ENES Climate Analysis Service (ECAS)".
2. Summarize your activity including your affiliation, the data you need and what for, and the impact of the results (no more than 3 sentences): "I work at (your institution) in (the country your work) for (your project). I would like to use (the data you need) to calculate (your pre- or post-processing analysis). My results will be part of (publications, reports,...) and be presented at (conferences, seminars,...)" .
3. Tell us the duration of your access. By default you can use the service during 1 month and it is extendible on demand, up to 3 months. Reapplication is possible. If you would like to use DKRZ resources for longer time, please apply to our Analysis Platforms service.

It will take us about one day to evaluate this info. If everything is ok, we will send you a confirmation email and you can start using the service (see step 3 above)!

For questions about the DKRZ ECAS, please reach us at data-pool@dkrz.de. Visit our FAQs [INTERNAL LINK] here.

<hr style="border:2px solid gray">

### <a name="cas-cmcc"></a> ENES Climate Analytics Service at CMCC

The CMCC climate analytics service instance is accessible at [https://ecaslab.cmcc.it/](https://ecaslab.cmcc.it/web/home.html) and provides:
- support for fast computations through the [Ophidia data analytics framework](https://ophidia.cmcc.it/), which enables data-intensive analysis exploiting advanced parallel computing techniques and smart data distribution methods;
- a large set of pre-installed Python libraries for data manipulation, processing and visualization ([Xarray](https://xarray.pydata.org/en/stable/), [Pandas](https://pandas.pydata.org/), [Matplotlib](https://matplotlib.org/), [Cartopy](https://scitools.org.uk/cartopy/docs/latest/), etc.);
- a data publication service to provide catalog, metadata, and access services for scientific data;
- variable-centric CMIP data archive synchronised with ESGF catalog.
Free registration is required. Get your account [here](https://ecaslab.cmcc.it/web/registration.php).

The Ophidia framework documentation, including starter tutorials, descriptions of all processing operators and example workflows, is available [here](https://ophidia.cmcc.it/documentation/).

For questions about the CMCC ECAS, please reach us at ecas-support(at)cmcc(dot)it. Visit our FAQs here.

<hr style="border:2px solid gray">

### <a name="cas-ukri"></a> ENES Climate Analytics Service at UKRI-CEDA

The UKRI-CEDA climate analytics service is accessible through the Jupyter Notebook service on the JASMIN data analysis platform. Step by step instructions on how to register for a JASMIN account and request access to the Notebook Service are available at [https://help.jasmin.ac.uk/article/4851-jasmin-notebook-service](https://help.jasmin.ac.uk/article/4851-jasmin-notebook-service). Registration is free.

The service provides:
- server-side processing service based on Jupyter Python notebooks to access and process CMIP and other climate data;
- a large set of pre-installed Python libraries for data manipulation, processing and visualization ([Xarray](https://xarray.pydata.org/en/stable/), [Pandas](https://pandas.pydata.org/), [Matplotlib](https://matplotlib.org/), [Cartopy](https://scitools.org.uk/cartopy/docs/latest/), etc.);
- Direct access to the CMIP data archive, synchronised with the ESGF catalog, and many other observational, reanalysis and model datasets in CEDA's multipetabyte archive. These include ESA CCI, ERA5 and the NOAA-CIRES-DOE Twentieth Century Reanalysis (20CR) version 2 (version 3 to follow soon).

When applying through the JASMIN accounts portal, state your reason for using JASMIN as “I am applying to be a user of the ENES Climate Analysis Service (ECAS)". In addition to creating an account, you will need to request access to the jasmin-login and jupyter-notebooks services. When requesting the services please provide some supporting information as follows “I am applying to be a user of the ENES Climate Analysis Service (ECAS). I would like to use (the data you need) to calculate (your pre- or post-processing analysis). My results will be part of (publications, reports,...) and be presented at (conferences, seminars,...)".

The Notebook service permits up to 100 GB of data storage in the user's home directory. Users needing larger amounts of data storage, the ability to share data with collaborators in a Group Work Space or access to the LOTUS batch compute cluster within JASMIN should apply to use our Analysis Platforms service.

For questions about the UKRI-CEDA ECAS, please contact us at support@jasmin.ac.uk.

<hr style="border:2px solid gray">

### <a name="cas-ipsl"></a> ENES Climate Analytics Service at CNRS-IPSL

The CNRS-IPSL Climate Data Analytics service relies on the digital resources and services of the [CLIMERI-France Infrastructure](https://climeri-france.fr/qui-sommes-nous/) (ESPRI). Through the ESPRI platform, the CNRS-IPSL ECAS users can (i) easily and transparently access a large set of data from global and regional climate simulations and (ii) benefit from the computing resources close to the data pools. The ESPRI is accessible via SSH connection. Full information on how to apply for a ESPRI account and request access to the CNRS-IPSL ECAS is available at https://mesocentre.ipsl.fr/account-opening/. We strongly recommend that you contact us directly at espri-mod[a]listes.ipsl.fr to guide you during and after the registration process.

The access to the CNRS-IPSL ECAS via the ESPRI is free of charge for EU research partners. When filling the application form, please add "I am applying to be a user of the ENES Climate Analysis Service (ECAS)" to justify your request and add Guillaume Levavasseur (glipsl[a]ipsl.fr) as Referent Staff. 

The CNRS-IPSL ECAS via the ESPRI offers:
- Direct access to the whole climate simulations (regional and global) produced by the IPSL (2 Petabytes).
- Direct access to a large subset of multi-model CMIP and CORDEX data pools, synchronized with the ESGF catalog hosted at IPSL.
- The possibility of completing the multi-model archive on demand.
- Direct access to many observational and reanalysis climate datasets.
- A large set of pre-installed Python libraries for data manipulation, processing and visualization ([Xarray](https://xarray.pydata.org/en/stable/), [Pandas](https://pandas.pydata.org/), [Matplotlib](https://matplotlib.org/), [Cartopy](https://scitools.org.uk/cartopy/docs/latest/), etc.);
- A pre-installed [Climaf](https://climaf.readthedocs.io/en/dev/) instance configured to access above data archives.

For questions about the CNRS-IPSL ECAS, please contact us at espri-mod[a]listes.ipsl.fr.




| **How do you feel? Ready to jump to the server-side near-data computing? Just choose one of our providers and start!** |


By applying to use the ECAS:
- you agree to include the following acknowledgement when presenting your results in scientific articles, conferences,...: *"This [insert type of result] is part of the IS-ENES3 project that has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 824084".*
- you agree that your personal data will be processed according to the [IS-ENES privacy policy](https://raw.githubusercontent.com/valeriupredoi/valeriupredoi.github.io/master/pages/privacy.md). 

ECAS DKRZ and CMCC instances are also EOSC-enabled thanks to its interoperability with EGI and EUDAT services, find ECAS in the [EOSC](https://www.eosc-hub.eu/) service portfolio.

The ECAS is a European service mainly addressed to model data users working in EU, the non-European communities are welcome if resources are available.

