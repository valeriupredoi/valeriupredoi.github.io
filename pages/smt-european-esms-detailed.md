---
layout: page
title: European Earth System Models
# subheadline: ISENES3 Key Workshops
# teaser: "ISENES3 workshops are wonderous."
header:
   image_fullwidth: "header_homepage_13.jpg"
permalink: "/smt-european-esms-detailed/"
categories:
    - design
tags:
    - design
    - background color
    - header
#header:
    #background-color: "#186F4D"
header:
    title: "European <br> Earth System <br> Models"
    background-color: "#186F4D;"
    #caption: This is a caption for the header image with link
    #caption_url: https://unsplash.com/
    image_fullwidth: "Banner_website_IS-ENES3.png"

---

**IS-ENES European Earth System Models - Description per model**

### <a name="cmcc-esm2"></a>CMCC-ESM2

**CMCC-ESM2 model of CMCC (Centro Euro-Mediterraneo sui Cambiamenti Climatici)**

![CMCC](../images/CMCC-logo.png)

- **Modelling group**: CMCC
- **Website**: [www.cmcc.it](https://www.cmcc.it/models)
- **Contact**: Pier Giuseppe Fogli<piergiuseppe.@foglicmcc.it>, Tomas Lovato<tomas.lovato@cmcc.it>

**IS-ENES3 services:**
- **Level 1**: Basic model information and contact points at ENES Portal

[CMCC-ESM2](https://www.cmcc.it/models/cmcc-esm-earth-system-model) is based on the coupling between the climate coupled model [CMCC-CM2](https://www.cmcc.it/models/cmcc-cm) (Cherchi et al., 2019), that accounts for interactive dynamics of atmosphere, ocean, sea-ice and land components, with the inclusion of the marine biogeochemistry to fully represent the global carbon cycles.

CMCC-ESM2 infrastructure integrates specific modelling component for atmosphere (CAM5.4), ocean (NEMO3.6), sea-ice (CICE4), land surface (CLM4.5) and ocean biogeochemistry (BFM5.1). Its development is partly supported by the EU H2020 project CRESCENDO (G.A. 779366).

CMCC-ESM2 contributes to the Climate Model Intercomparison Project Phase 6 (CMIP6).

**Main model components**
- CAM5.4 for the atmosphere
- NEMO3.6 for the ocean
- CICE4 for the sea-ice
- CLM4.5 for the land surface
- BFM5.1 for ocean biogeochemistry

**ES-DOC model descriptions for CMCC-ESM2 (CMIP6)**
- [CMCC-ESM2](https://explore.es-doc.org/cmip6/models/cmcc/cmcc-esm2)
- [CMCC-CM2-SR5](https://explore.es-doc.org/cmip6/models/cmcc/cmcc-cm2-sr5) (GCM version)
 
**Previous model version: CMCC-CESM**
The former version of the CMCC Earth System Model, referred to as CMCC Carbon Earth System Model (CMCC-CESM; Vichi et al., 2011), was based on the coupling between [ECHAM5](https://mpimet.mpg.de/en/science/models/mpi-esm/echam/) (atmosphere), [OPA8.2](https://www.nemo-ocean.eu/) (ocean), SILVA (land surface and vegetation), LIM (sea-ice) and [BFMv2](https://www.cmcc.it/models/biogeochemical-flux-model-bfm) (ocean biogeochemistry). This model was developed and used under the EU FP6 project ENSEMBLES (GOCE-CT-2003-505539) and contributed to CMIP5. Data produced with CMCC-CESM simulations are available on the ESGF portals.

**ES-DOC model description for CCMC-CESM (CMIP5)**
- [CMCC-CESM CMCC Carbon Earth System Model](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=CMCC-CM&project=CMIP5)
- [CMCC-CM CMCC Climate Model](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=CMCC-CM&project=CMIP5)
- [CMCC-CMS CMCC Climate Model with a resolved Stratosphere](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=CMCC-CMS&project=CMIP5)

<hr style="border:2px solid gray">

### <a name="cnrm-cm6"></a>CNRM-CM6

![CNRM-CM6](../images/)

<hr style="border:2px solid gray">

### <a name="ec-earth3"></a>EC-Earth3

**EC-Earth3 model of the EC-Earth consortium**

![EC-EARTH](../images/EC-Earth-ESM.png)

- **Modelling group**: EC-Earth consortium
- **Website**: http://www.ec-earth.org
- **Contact**: Shuting Yang (DMI, Head of EC-Earth Steering committee)

**IS-ENES3 services:**
- **Level 1**: Basic model information and contact points at ENES Portal
- **Level 2**: Advanced services for for model users and developers (limited to EC-Earth consortium members)

EC-Earth is developed as part of a Europe-wide consortium thus promoting international cooperation and access to knowledge and a wide data base. EC-Earth’s main objective is to develop and apply an ESM based on ECMWFs seasonal forecasting system for providing trustworthy climate information to climate services and to advance scientific knowledge on the Earth system, its variability, predictability and long-term changes resulting from external forcing.

EC-Earth has become a prominent state-of-the-art model within the European landscape of Earth System Models, as shown by the involvement in many European projects, its significant contribution to CMIP5 and CMIP6.

Access to the code, documentation and support is limited to EC-Earth consortium member institutions due to licensing terms of the ECMWF IFS, the atmospheric component model of EC-Earh. Please use the contact information above to get in touch with the consortium.

**Main model components**
- [IFS](https://www.ecmwf.int/en/research/modelling-and-prediction): representing the atmosphere
- [HTESSEL](https://www.ecmwf.int/en/elibrary/7921-revised-hydrology-ecmwf-model-verification-field-site-terrestrial-water-storage-and): representing the continental surfaces
- [NEMO](https://www.nemo-ocean.eu/): representing the ocean
- [LIM](https://gmd.copernicus.org/articles/8/2991/2015/): representing the sea-ice
- [LPJ-GUESS](https://web.nateko.lu.se/lpj-guess/index.html): representing the dynamic vegetation
- [TM5](https://www.projects.science.uu.nl/tm5): representing the atmospheric chemistry

**ES-DOC model descriptions**
- **CMIP6** configurations: [EC-Earth3](https://explore.es-doc.org/cmip6/models/ec-earth-consortium/ec-earth3), [EC-Earth3-Veg](https://explore.es-doc.org/cmip6/models/ec-earth-consortium/ec-earth3-veg), [EC-Earth3-AerChem](https://explore.es-doc.org/cmip6/models/ec-earth-consortium/ec-earth3-aerchem), [EC-Earth3-CC](https://explore.es-doc.org/cmip6/models/ec-earth-consortium/ec-earth3-cc), [EC-Earth3-LR](https://explore.es-doc.org/cmip6/models/ec-earth-consortium/ec-earth3-lr), [EC-Earth3-HR](https://explore.es-doc.org/cmip6/models/ec-earth-consortium/ec-earth3-hr), [EC-Earth3-Veg-LR](https://explore.es-doc.org/cmip6/models/ec-earth-consortium/ec-earth3-veg-lr), [EC-Earth3-GrIS](https://explore.es-doc.org/cmip6/models/ec-earth-consortium/ec-earth3-gris)
- **CMIP5** model version: [EC-Earth2](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=EC-Earth&project=CMIP5)

<hr style="border:2px solid gray">

### <a name="ipsl-cm6"></a>IPSL-CM6

**IPSL-CM6 model of IPSL (Institute Pierre-Simon Laplace)**

![IPSL](../images/IPSL-logo.png)

- **Modelling group**: IPSL
- **Website**: [https://www.ipsl.fr/en/](https://www.ipsl.fr/en/home-en/)
- **Contact**: Arnaud Caubel<arnaud.caubel@lsce.ipsl.fr>

**IS-ENES3 services:**
- **Level 1**: Basic model information and contact points at ENES Portal

The **IPSL Climate Modelling Centre (IPSL-CMC)** is hosting a collaborative effort to develop climate models, study the natural variability of climate, its past, current and future changes, and the anthropogenic influences on it. Numerical models of the individual components of the climate system are developed in the IPSL laboratories: atmosphere, ocean, continental surfaces, marine and terrestrial ecosystems, atmospheric chemistry. Physical, chemical and biogeochemical processes are considered. IPSL-CMC brings together the different teams of the IPSL laboratories that have modelling activities but has also dedicated staff to develop the IPSL integrated model of the Earth system. Overall, IPSL-CMC involves more than 80 engineers and scientists. A larger group of about 200 people use its results and benefit from the availability of the simulation data.

**[IPSL-CM6A-LR](https://cmc.ipsl.fr/ipsl-climate-models/ipsl-cm6/)** is the latest version of the IPSL climate model. This model contributes to the Climate Model Intercomparison Project Phase 6 (CMIP6). In addition to the physical atmosphere-land-ocean-sea ice model based on the LMDz, ORCHIDEE, NEMO (including the LIM and PISCES subcomponents) models, it also includes a representation of the carbon cycle. Modules for interactive stratospheric chemistry (REPROBUS) and tropospheric chemistry with aerosols (INCA) can be activated. The IPSL climate model uses the OASIS3-MCT coupler(https://valeriupredoi.github.io/smt-common-software-tools-detailed#oasis-detailed), the powerful XIOS input/output server as well as libIGCM running environment library.

**Main model components**
- [LMDZ](https://lmdz.lmd.jussieu.fr/): representing the atmosphere
- [ORCHIDEE](https://orchidee.ipsl.fr/): representing the continental surfaces
- [NEMO](https://www.nemo-ocean.eu/): representing the ocean, sea-ice and biogeochemical processes
- [INCA](http://inca.lsce.ipsl.fr/index_UK.html): representing the atmospheric (tropospheric) chemistry and aerosols

**ES-DOC model information**
- **CMIP6** configurations: [IPSL-CM6A-LR](https://explore.es-doc.org/cmip6/models/ipsl/ipsl-cm6a-lr)
- **CMIP5** configurations: [IPSL-CM5A-LR](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=IPSL-CM5A-LR&project=CMIP5), [IPSL-CM5A-MR](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=IPSL-CM5A-MR&project=CMIP5)

<hr style="border:2px solid gray">

### <a name="mpi-esm"></a>MPI-ESM

**MPI-ESM model of the MPI-M (Max-Planck-Institut für Meteorologie)**

![MPI-ESM](../images/MPI-ESM.png)

- **Modelling group**: MPI-M
- **Website**: https://www.mpimet.mpg.de
- **Contact**: Michael Botzet

**IS-ENES3 services:**
- **Level 1**: Basic model information and contact points at ENES Portal

**[MPI-ESM](https://mpimet.mpg.de/en/science/models/mpi-esm)** (MPG) is a comprehensive Earth-System Model, in the sense that it consists of component models for the ocean, the atmosphere and the land surface. 

These components are coupled through the exchange of energy, momentum, water and important trace gases such as carbon dioxide. The model was developed by the MPI for Meteorology (MPI-M) and is based on its predecessors, the ECHAM5/MPIOM coupled model and its COSMOS versions. ECHAM5/MPIOM was used for the simulations contributing to third phase of the coupled model intercomparison project (CMIP3), and for the MPI-M Millennium project. MPI-ESM consists of general circulation models for the atmosphere (ECHAM6), the ocean and sea ice (MPIOM) - coupled by OASIS3 -, the land surface model JSBACH, and optionally includes dynamical land vegetation (DYNVEG), and marine biogeochemistry (HAMOCC). MPI-ESM was used as the basis for MPI-M's contribution to CMIP5 and was used at about 45 institutions world-wide. A model version coupled to an aerosol and chemistry module (HAMMOZ) was developed jointly with partners in ENES.

***Active development by MPI-M ended in favor of [ICON](https://mpimet.mpg.de/en/science/modeling), the next generation model developed and used by MPI-M together with partners, most notably [DWD](https://www.dwd.de/EN/research/weatherforecasting/num_modelling/01_num_weather_prediction_modells/icon_description.html?nn=484268), [DKRZ](https://www.dkrz.de/en/services/software-development?set_language=en) and [KIT](https://www.imk-tro.kit.edu/english/5925.php).***
 
**Main model components**
- [ECHAM6](https://mpimet.mpg.de/en/science/models/mpi-esm/echam): representing the atmosphere
- [JSBACH](https://mpimet.mpg.de/en/science/modeling-with-icon/icon-configurations/icon-l/jsbach): representing the land surface
- [MPIOM](https://mpimet.mpg.de/en/science/models/mpi-esm/mpiom): representing the ocean and sea ice

**Further documentation**
- Source code [access](https://mpimet.mpg.de/en/science/modeling-with-icon/code-availability)
- MPI-ESM [general description](https://mpimet.mpg.de/en/science/models/mpi-esm)

**ES-DOC model descriptions**
- **CMIP6** configuration: [MPI-ESM1.2-HAM](https://explore.es-doc.org/cmip6/models/hammoz-consortium/mpi-esm-1-2-ham)
-**CMIP5**  configurations:
- [MPI-ESM-LR T63/L47-B1.5/L40](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=MPI-ESM-LR&project=CMIP5)
- [MPI-ESM-MR T63/L95-T0.4/L40](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=MPI-ESM-MR&project=CMIP5)
- [MPI-ESM-P as LR, no dyn. veg.](https://view.es-doc.org/?renderMethod=name&type=cim.1.software.ModelComponent&name=MPI-ESM-P&project=CMIP5)

<hr style="border:2px solid gray">

### <a name="ukesm"></a>UKESM

![UKESM](../images/UKESM.png)


<hr style="border:2px solid gray">

### <a name="noresm"></a>NorESM

![NorESM](../images/NorESM.png)

