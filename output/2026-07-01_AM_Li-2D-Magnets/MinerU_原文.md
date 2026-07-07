# Multi-State Memory in 2D Magnets via Thickness-Engineered Growth

Bailing Li<sup>1</sup> Kun He<sup>2,3</sup> Biao Zhang<sup>1</sup> Chen Yi<sup>2</sup> Jianyi Huang<sup>1</sup> Zijing Zhao<sup>1</sup> Zhuoya Feng<sup>1</sup> Yi Han<sup>1</sup> Shibo Li<sup>1</sup> Ziyu Meng<sup>1</sup> Guanghui Han<sup>1</sup> Licong Peng<sup>1</sup> Rui Wu<sup>4</sup> Yanglong Hou<sup>1,5,6</sup> 

<sup>1</sup>School of Materials Science and Engineering, Peking University, Beijing, China <sup>2</sup>Hunan Provincial Key Laboratory of Two-Dimensional Materials, School of Physics and Electronics, Hunan University, Changsha, China <sup>3</sup>School of Physics and Optoelectronics, Xiangtan University, Hunan, China <sup>4</sup>Spin-X Institute, School of Physics and Optoelectronics, South China University of Technology, Guangzhou, China <sup>5</sup>School of Materials, Shenzhen Campus of Sun Yat-Sen University, Shenzhen, China <sup>6</sup>State Key Laboratory of Optoelectronic Materials and Technologies, Guangzhou, China 

Correspondence: Yanglong Hou (hou@pku.edu.cn) 

Received: 11 March 2026 Revised: 15 May 2026 Accepted: 5 June 2026 

Keywords: 2D magnet | multi-state storage | multi-thickness CrTe nanoflakes | selective non-uniform nucleation growth model 

## ABSTRACT

Two-dimensional (2D) magnets offer substantial potential for high-density spintronic memory due to their tunable magnetic states, yet a robust, scalable strategy for controlling domain configurations for 2D magnets remains elusive. Here, a selective non-uniform nucleation strategy via chemical vapor deposition is proposed to achieve controlled, non-homogeneous growth of room-temperature ferromagnetic CrTe nanoflakes. This enables bottom-up control of domain evolution by leveraging the strong correlation between the thickness profile and magnetization reversal. The stepwise magnetization reversal in multithickness nanoflakes endows CrTe with multiple magnetic states. Utilizing such multi-thickness CrTe nanoflake, a tunable multi-state magnetoresistance is successfully realized in vertical spin valve devices. The controlled synthesis of multi-thickness CrTe nanoflakes signifies a breakthrough in domain-state control in 2D magnet, and establishes a robust material foundation for potential applications in multi-state storage and spin encryption communication. 

## 1 Introduction

Non-volatile multiple magnetic and resistive states switching holds great potential for next-generation high-density information storage technologies [1–5]. Magnetic-domain engineering enables the precise control of multiple magnetic states, which is essential for encoding and manipulating spin information in memory and logic device applications [6–8]. The atomic thinness and mechanical flexibility of 2D magnets make them highly responsive to strain, doping, vacancies, and interfacial coupling [9–16], offering a versatile platform for tailored magnetic domain states. Currently, such manipulation of magnetic domain structures in 2D magnets is predominantly achieved through top-down approaches. Among these, heterojunction engineering via mechanical stacking serves as a prominent method, which breaks symmetry to introduce the Dzyaloshinskii-Moriya interaction (DMI) that is responsible for stabilizing topological spin textures (e.g., skyrmions) [17]; while simultaneously creating terrace edges at the interfaces provides energetically favorable nucleation sites for controlled domain formation [18]. The strategy of twist engineering in stacked 2D magnets (e.g., CrSBr [19] and CrI [20]) allows fine control over interlayer coupling and symmetry, enabling deterministic creation of complex spin textures. Beyond stacking, the intrinsic properties of 2D magnets provide additional powerful means for domain engineering. For instance, self-folding of continuous flat $\mathrm { F e } _ { 3 } \mathrm { G a T e } _ { 2 }$ nanoflakes breaks inversion symmetry and drives a transition from a single-domain state to a triple-domain state [21]. Moreover, 2D magnets are highly sensitive and responsive to lattice deformation [22–24], allowing external strain to serve as a direct and effective tool for reconfiguring magnetic domains. In $\mathrm { F e } _ { 3 } { \mathrm { G a T e } } _ { 2 } ,$ applying an in-plane strain gradient via mechanical wrinkling has been shown to transform labyrinthine domains into a skyrmion state [25]. However, these methods often face challenges in precisely controlling strain or stacking forms, making it difficult to reproducibly create and manipulate identical magnetic domain structures. In contrast, bottom-up synthesis offers atomic-level precision and enables the scalable production of well-defined structures. This inherent advantage positions it as a key route toward achieving desired magnetic domain configurations in 2D magnets. 

Among the family of 2D magnetic materials, $\mathrm { C r } _ { 1 + \mathrm { x } } \mathrm { T e } _ { 2 }$ stands out as a particularly interesting system, exhibiting remarkable magnetic properties and outstanding air stability [26–32]. Notably, CrTe demonstrates both high Curie temperature $\left( T _ { \mathrm { C } } \right)$ and substantial thickness-modulated magnetic behavior [33], establishing its potential as a competitive spintronic material. Unlike conventional van der Waals magnet with weak interlayer magnetic coupling [34, 35], CrTe is a non-layered magnet featuring covalent interlayer bonding that gives rise to robust vertical magnetic coupling [36]. Here, we demonstrate that this intrinsic coupling can be harnessed as a design principle: by engineering multiple thicknesses within individual nanoflakes and utilizing the strong thickness-dependent coercive field, localized magnetic reversal can be induced, creating multidomain states. Realizing such multi-domain structures, however, faces a major synthetic hurdle. Currently, the bottom-up synthesis of 2D magnet is mainly achieved by chemical vapor deposition (CVD), which is widely recognized as a scalable method for synthesizing 2D magnet, such as $\mathrm { C r T e } _ { 2 }$ [37], CrSe [38] $\mathrm { F e } _ { \mathrm { 1 + x } } \mathrm { S e } _ { 2 }$ [39]. The growth of these nanoflakes typically follows the Frank-van der Merwe (layer-by-layer) growth mode [40], where each new layer tends to nucleate only after the underlying layer is nearly complete, yielding nanoflakes with uniform thickness. This offers good scalability for single-thickness flakes but limited controllability over thickness distribution. Current strategies for achieving multi-thickness in 2D materials such as mechanical exfoliation [41] or substrate morphologydependent CVD strategy [42], remain highly stochastic and substrate-constrained, making the efficient and controllable synthesis of specific multi-thickness nanoflakes a significant challenge. 

In this work, we developed a selective non-uniform nucleation growth (SNNG) model to achieve bottom-up control of domain states in a 2D magnet. Guided by this model, distinct thickness regions are created within individual single-crystalline roomtemperature ferromagnetic nanoflakes. The strong correlation between the local coercivity and the thickness enables the multistep magnetic domain switching in an individual CrTe flake with the resulting domain pattern dictated by the thickness profile of the flake. This demonstrates a robust route to achieve designed magnetic domain configurations by tailoring the nanoflake thickness distribution. Furthermore, we have realized multi-state vertical spin valve devices based on these multi-domain states, demonstrating their strong potential for multi-state storage and spin encryption applications. 

## 2 Results

## 2.1 Synthesis of Thickness-Engineered CrTe Nanoflakes

CrTe nanoflakes are synthesized employing a dual-temperature zone CVD system, with Te granules and $\mathrm { C r C l } _ { 3 }$ powder serving as the chemical precursors. The Te granules are placed in the upstream zone, while $\mathrm { C r C l } _ { 3 }$ powers (premixed with the molecular sieves) and a polishing $\mathrm { S i O } _ { 2 } / \mathrm { S i }$ substrate (face down) are colocated in the center of the downstream zone (Figure 1a). The molecular sieves play a critical role in regulating the Cr source evaporation kinetics [43, 44], which is essential for the controllable growth of CrTe nanoflakes with multi-thickness structures. Remarkably, by adjusting the distance between the substrate and the Cr precursor, we achieve precise synthesis of multi-thickness CrTe nanoflakes. As the distance between the substrate and precursor (d) decreases systematically from 4.0 to 0.7 mm, the resulting nanoflakes undergo a striking shape transformation: from radial-shaped (for $\mathrm { ~ d ~ } \geq 4 . 0$ mm), to bowlshaped (for 4 mm $< d < 2 . 5 \ : \mathrm { m m } )$ , then to windmill-shaped (for 2.5 mm $< d < 2 \mathrm { m m } )$ , and finally to volcanic-shaped (for 1.0 mm < $d < 0 . 3$ mm) (Figure 1b). 

To elucidate the mechanism underlying the substrate-positiondependent shape evolution of CrTe nanoflakes, we conduct systematic density functional theory (DFT) calculations. Prior experimental and calculational studies have demonstrated that, in the growth of transition metal dichalcogenides (TMDCs), once the initial monolayer of TMDCs is formed, subsequent atomic adsorption, nucleation, and further growth of incoming atoms preferentially occur at sites exhibiting the lowest adsorption energies $\left( E _ { \mathrm { a d s } } \right)$ for the active clusters [45, 46]. Our observations reveal an SNNG model for multi-thickness CrTe nanoflakes: (i) initial nucleation and growth of a $\mathrm { C r T e } _ { 2 }$ layer, (ii) selective nonuniform secondary nucleation on the preformed $\mathrm { C r T e } _ { 2 }$ surface; (iii) region-dependent growth rate variations that ultimately give rise to the final multi-thickness architecture. To investigate the selective non-uniform nucleation mechanism, we probe the early-nucleation stage on preformed CrTe surfaces. Following precursor evaporation, the vapor phase contains active chromium telluride clusters. 

While direct experimental detection of such transient clusters during high-temperature CVD is extremely challenging, it is an accepted practice in the 2D materials community to use DFT calculations to evaluate the thermodynamic feasibility of plausible clusters and correlate them with experimental outcomes [45, 47, 48]. Here, we consider four representative clusters, namely $\begin{array} { r } { { \mathrm { C r T e } _ { 2 } } , \mathrm { C r } _ { 2 } \mathrm { T e } _ { 2 } \mathrm { ( i . e . , C r T e ) } , \mathrm { C r } _ { 3 } \mathrm { T e } _ { 2 } , } \end{array}$ and $\mathrm { C r } _ { 4 } \mathrm { T e } _ { 2 }$ . These clusters are chosen because they are expected to be relatively stable within the experimentally relevant range of Cr chemical potential $( \mu _ { \mathrm { C r } } ) .$ This set of clusters, while a reasonable simplification, already captures the essential spatial heterogeneity observed in our experiments. Figure 1c illustrates that the formation energies $\left( E _ { \mathrm { f } } \right)$ of these ${ \bf C r } _ { 1 + \mathrm { x } } { \bf T e } _ { 2 } ~ ( \mathrm { x } = 1 , ~ 2 , ~ 3 , ~ 4 )$ clusters vary systematically with $\mu _ { \mathrm { C r } } ,$ reflecting the relative thermodynamic stability of these clusters. In our CVD setup, as the substrate distance from the precursor source increases, the concentration of Cr-based precursors decreases, leading to a radial decay in $\mu _ { \mathrm { { C r } } } .$ . Consequently, different clusters dominate in different $\mu _ { \mathrm { { C r } } }$ windows: Cr-rich clusters $( \mathrm { e . g . } ,$ $\mathrm { C r } _ { 4 } \mathrm { T e } _ { 2 } )$ are favored at higher $\mu _ { \mathrm { { C r } } }$ (close to the source), while CrTe and CrTe become relatively more stable at lower µ (farther from the source). By placing the $\mathrm { S i O } _ { 2 } / \mathrm { S i }$ substrate at specific locations along this gradient, we can preferentially capture target clusters. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/da2f3879ce3f0271c925263f6ee9968b9ec81c5078e27c70c925299d6e951613.jpg)



FIGURE 1 The growth mechanism of multi-thickness CrTe nanoflakes guided by the selective non-uniform nucleation growth (SNNG) model. (a) Schematic diagram of the CVD setup for the synthesis of multi-thickness CrTe nanoflakes on $\mathrm { S i O } _ { 2 } ,$ /Si substrate. (b) The optical microscopy (OM) images of the as-grown CrTe nanoflakes under four representative precursor-to-substrate distances: 4.0, 3.0, 2.2, and 0.7 mm. (c) Calculated $E _ { \mathrm { f } }$ of various $\mathrm { C r } _ { \mathrm { m } } \mathrm { T e } _ { 2 }$ active clusters as a function of the $\mu _ { \mathrm { { C r } } }$ . (d) Theoretical calculation of the $E _ { \mathrm { a d s } }$ of Cr Te clusters on the Te (Cr)-terminated edge and the centra region of initial $\mathrm { C r T e } _ { 2 }$ layers, respectively. (e) The growth mechanism of windmill-shaped CrTe nanoflake guided by the SNNG model. (f,g) The growth mechanism of uniform (f) and multi-thickness (g) CrTe nanoflakes.


Among all observed structures, windmill-shaped CrTe nanoflakes display the most intricate thickness profile, rendering them an ideal model system for explaining the growth mechanism. The site-selective adsorption and nucleation of specific active clusters on initial $\mathrm { C r T e } _ { 2 }$ layers are driven by spatial variations in surface $E _ { \mathrm { a d s } }$ . When the value of d is within the range of 2.0 mm to 2.5 mm, Cr Te emerges as the predominant active cluster on the substrate. Calculations reveal that $\mathrm { C r } _ { 3 } \mathrm { T e } _ { 2 }$ exhibits a higher $E _ { \mathrm { a d s } }$ on the Cr-terminated edge (−1.35 eV), compared to the Te-terminated edge (−4.26 eV) and the central region of the initial $\mathrm { C r T e } _ { 2 }$ surface (−3.79 eV) (Figure 1d). This promotes Cr Te clusters preferential adsorption at Te-terminated edges and the central region, leading to bi-directional simultaneous growth models: inward growth from the Te-terminated edges and outward growth from the central region, ultimately forming the windmill-shaped nanoflakes (Figure 1e; Figure S1). As the substrate position varies, the captured active clusters change accordingly, leading to distinct morphological outcomes. Specifically, the radial-shaped nanoflakes result from the preferential adsorption of $\mathrm { C r T e } _ { 2 }$ clusters at the Te-terminated edges. In contrast, the bowl-shaped structures are governed by CrTe clusters, which exhibit comparable $E _ { \mathrm { a d s } }$ at both Te- and Crterminated edges (Figures S2 and S3). The lower $E _ { \mathrm { a d s } }$ at the edges favor the inward growth mode, which can also extend to merged nanoflakes. For instance, during directional growth on $\mathrm { W S e } _ { 2 }$ substrates, directionally aligned CrTe flakes still follow this mode even after merging (directionally merged nanoflakes without obvious grain boundaries) (Figure S4a). This further supports the reliability of our SNNG model. However, the merging of adjacent flakes causes original edges to vanish and new edges to form at the periphery, resulting in a large film with irregular thickness distribution (Figure S4b). Beyond these morphologies, the volcanic-shaped nanoflakes form due to the strong preference of $\mathrm { C r } _ { 4 } \mathrm { T e } _ { 2 }$ clusters adsorption for the central region over the edges, driving central dome formation and outward expansion (Figure S5). Notably, lattice defects and grain boundaries within the nanoflakes can also act as preferential adsorption sites, providing the lowest $E _ { \mathrm { a d s } }$ positions that promote the nucleation of wedge-shaped CrTe structures (Figures S6 and S7). 

Four representative CrTe nanoflake morphologies—radial, bowl, windmill, and volcano—consistently exhibit two distinct thickness levels (Figure S8). To further broaden their applicability, it is essential to achieve controlled growth that transitions individual nanoflakes from a single-thickness state to multi-thickness configuration. According to the SNNG model, obtaining uniform nanoflakes demands a consistent growth rate throughout al the additional layers. In our proposed model, the formation of volcano-shaped structures is governed by one dominant growth rate under a diffusion-controlled regime. This process is driven by an excess of $\mathrm { C r } _ { 4 } \mathrm { T e } _ { 2 }$ active clusters, which promote rapid nucleation in the central region and result in an uneven thickness profile. In contrast, achieving uniform nanoflakes requires a transition to an adsorption-controlled mechanism by limiting the cluster density. This shift ensures sequential, layer-by-layer growth, ultimately yielding flat and homogeneous nanoflakes (Figure 1f: Figure S9). This uniform growth mode also works on van der Waals substrates such as WSe . By adjusting the substrate position, we achieve directiona growth of uniform CrTe nanoflakes that maintain uniform thickness even during merging (Figure S10). With wafer-scale single-crystalline WSe or $\mathrm { W S } _ { 2 }$ substrates, extended growth time, and sufficient precursor supply, wafer-scale uniform CrTe thin films could be feasible. Similarly, CrTe clusters exhibit synchronous inward growth rate on the existing $\mathrm { C r T e } _ { 2 }$ layer, allowing for the formation of uniform nanoflakes simply by extending the growth time under steady precursor supply. This process enables the clusters to progressively fill in and coalesce, yielding a nearly uniform CrTe nanoflake (Figure S11). Engineering multi-thickness requires spatially differentia growth rates. Considering windmill-shaped CrTe nanoflakes, the fast growth rate $\left( r _ { 1 } \right)$ at the Te-edge and central region is responsible for the distinct two thicknesses, When the growth substrate is positioned closer to the precursor source the $\mathrm { C r } _ { 4 } \mathrm { T e } _ { 2 }$ active clusters added during the growth stage produce an additional growth rate $\left( r _ { 2 } \right)$ in the central region, resulting in the formation of three or even more thickness levels (Figure 1g; Figure S12a,b). Conversely, raising the substrate position will add CrTe clusters, enhance the growth rate at the edges (the rate of Te-terminated edge is $r _ { 1 } + r _ { 3 } ,$ Cr-terminated edge is $r _ { 3 } ,$ and the central region is $r _ { 1 } ) _ { \cdot }$ , also enabling the formation of multi-thickness nanoflakes (Figure S12c,d). Analogously, multi-thickness CrTe nanoflakes can be obtained in other morphologies, such as radial-shaped nanoflakes, where the growth of additional layers is governed by multiple rates (Figure S13). 

## 2.2 Structural Characterization of Multi-Thickness CrTe Nanoflakes

We select a typical windmill-shaped nanoflakes to characterize the crystal structure across its regions of varying thickness (Figure 2a). CrTe adopts a non-layered structure formed by complete intercalation of Cr atoms into the van der Waals gaps of CrTe , wherein intercalated and original Cr atoms within the $\mathrm { C r T e } _ { 2 }$ layers maintain identical periodicity (Figure 2b). Crosssectional scanning transmission electron microscopy (STEM) is performed to examine the lattice arrangement across regions of thickness variation, confirming structural consistency throughout the sample (Figure 2c). Atomic-resolution STEM analysis provides direct visualization of the atomic arrangement across all segments. Due to atomic numbers (Z)—contrast and size effects [49], Te atoms (Z = 52, 140 pm) appear as bright large spheres, while Cr atoms (Z = 24, 128 pm) are faint gray spheres. No obvious lattice defects are observed in the STEM images, suggesting high crystal quality of our samples. Nearly identical intensities are observed for Cr atoms at different positions, supporting the model of fully intercalated CrTe (Figure 2d,e). Figures S14 and S15 provide further evidence that the in-plane atomic arrangement and compositional remain uniform, indicating a consistent CrTe structure throughout the thickness variations in the windmillshaped nanoflake. Importantly, the STEM analysis reveals nearly identical interatomic spacing across different thickness regions, indicating negligible strain within the nanoflake. 

## 2.3 Emergent Magnetism in CrTe Nanoflakes with Lateral Thickness Variations

The successful synthesis of CrTe nanoflakes with multithicknesses, guided by the SNNG model, enables exploration of their unique magnetic properties. We perform a comparative investigation of the magnetic properties between multi-unit-cell (multi-UC, <sup>></sup> 15 nm) and few-unit-cell (few-UC, <sup><</sup> 7 nm) radialshaped CrTe crystals via temperature-dependent vibrating sample magnetometry (VSM) (Figure 3a). Temperaturedependent tests under spontaneous magnetization regime without magnetic field $\mathbf { \left( B \alpha = \alpha 0 \right) }$ and magnetization under 0.05 T zero-field-cooling (ZFC) and field cooling (FC) tests are performed on multi-UC, and few-UC CrTe crystals (Figure 3b). The $T _ { \mathrm { { C } } }$ increases from ∼298 K for few-UC to ∼330 K for multi-UC CrTe. Consistently, the MH results show that the few-UC sample exhibits a ferromagnetic-to-paramagnetic transition near 300 K while the multi-UC sample retains clear hysteresis behavior at room temperature (Figures S16 and S17a). Systematic comparison of coercive field $\left( H _ { \mathrm { C } } \right)$ reveals a pronounced thickness-dependent magnetic behavior. At 100 K, the few-UC structure displays an $H _ { \mathrm { C } }$ approximately five times larger than the multi-UC counterpart (Figure 3c), consistent with earlier reports on free-standing CrTe nanoflakes [32]. This thickness-dependent $H _ { \mathrm { C } }$ originates from changes in magnetic anisotropy and demagnetization effects. Few-UC samples typically exhibit stronger perpendicular magnetic anisotropy due to the dominant surface/interface contribution, which increases the energy barrier for magnetization reversal and leads to higher $H _ { \mathrm { C } } \left[ 2 9 , 5 0 \right.$ 51] . In contrast, as the thickness increases, the demagnetization field in the multi-UC sample becomes more pronounced $( H _ { d }$ $\approx M \mathrm { s } ~ \cdot N _ { \mathrm { Z } } ,$ , where Nz is the demagnetizing factor and increases with the thickness) [52, 53], reducing the effective anisotropy field and consequently lowering $H _ { \mathrm { C } }$ . Robust perpendicular magnetic anisotropy is confirmed in the as-synthesized CrTe nanoflakes, as evidenced by the strong angular dependence of the $R _ { \mathrm { x y } } .$ -H curves on the orientation of the external magnetic field (Figure S17b). 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/c91bd9627954a0f5352d0c02e635174a40ce6c1cf1f18bac4331832c880033fc.jpg)



FIGURE 2 Structure characterization of the windmill-shaped CrTe nanoflake. (a) Scanning electron microscope (SEM) image of the tip of a windmill-shaped CrTe nanoflake. The scale bar is 1 µm. (b) Atomic structure model of dual-thickness CrTe crystals. (c) The cross-sectional STEM image of the thickness gradient indicated by the white rectangle in (a). The scale bar is 10 nm. (d) The corresponding high-resolution HAADF-STEM image of the red and blue rectangles in (c). Scale bars: 1 nm. (e) Two kinds of Cr atoms intensity line with the red and blue rectangles highlighted in panel (d).


We analyze a CrTe nanoflake featuring two distinct thickness levels, with a thicker region (red dashed line, 54.5 nm) and a thinner region (blue dashed line, 35.2 nm) (Figure 3d,e). The thinner region exhibits a significantly higher $H _ { \mathrm { C } }$ than the thicker region (Figure 3f), consistent with our MH test. As a non-layered ferromagnet, CrTe processes strong magnetic coupling along the c-axis (Figure 3g). Given the strong thickness dependence of $H _ { \mathrm { { C } } } ,$ , regions with consistent thickness within a single nanoflake undergo coherent magnetic reversal. When an applied magnetic field reaches the first critical value $( H _ { \mathrm { C I } } )$ , the thicker region undergoes magnetic reversal independently, while the thinner region retains its original magnetization direction. The abrupt change in magnetization state at the thickness interface creates a pinning potential due to the local variation in domain wall energy. Consequently, a magnetic domain wall (DW) is pinned at the interface between the thick and thin regions, stabilizing an antiparallel magnetic domain state. This state persists until the field is increased to the second critical value $( H _ { \mathrm { C I I } } )$ , which triggers the reversal of the thinner region, resulting in a uniform ferromagnetic (FM) state with magnetization opposite to the initial direction (Figure 3h). These results demonstrate that magnetic DWs can be deliberately engineered by leveraging controlled thickness variations within a single nanoflake. Correspondingly, the spatial configuration of these antiparallel domains is directly governed by the nanoflake’s thickness profile, offering a reliable route for regulating magnetic domain structures. 

## 2.4 Direct Observation of Multiple Magnetic Domains in Multi-Thickness CrTe Nanoflakes

The out-of-plane magnetization component $\left( M _ { \mathrm { Z } } \right)$ of CrTe linearly correlates with the magnetic-optical Kerr effect (MOKE) intensity contrast, which allows the magnetic moment reversal to be directly visualized. This capability enabled us to observe the thickness-dependent magnetic domain dynamics in situ within individual multi-thickness CrTe nanoflakes. We selected a trithickness nanoflake (with regions II, III, and I measuring 15.2, 11.1, and 24.7 nm, respectively, Figure 4a) to trace its magnetization reversal process. Initially, all regions were saturated with upward magnetization under a strong applied field. Under a reverse field, region I (the thickest region) underwent magnetic reversal first when the field exceeded its coercive field $H _ { \mathrm { C I } } -$ creating a well-defined intermediate domain state. With further increase of the reversal field to $H _ { \mathrm { C I I } } -$ , region II (of intermediate thickness) reversed, leading to another distinct domain state with two DWs. Finally, at a higher field $( H { > } H _ { \mathrm { C I I I } } { } ^ { - } )$ , all regions reversed to align with the external field, yielding a uniform ferromagnetic (FM) state (Figure $^ { 4 \mathrm { b } , \mathrm { c } ) }$ . The observed strong thickness dependence of magnetization reversal in tri‑thickness CrTe nanoflakes enables stpwise magnetization reversal, offering a route to design complex magnetic domain configurations. Moreover, MOKE measurements on different nanoflakes with identical thickness (Figure S18) show consistent switching fields, ruling out extrinsic factors such as defects or inhomogeneities as the origin of the stepwise reversal. 


a


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/53e6c1765b3d472069494431fefaa0b862fa80aba488b3d167ef53c71d36514d.jpg)



b


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/e5701d341e465337a7b002963d8fbfa2c44b1838ef09dc825b53067eeadc50d7.jpg)



d


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/4df635da711e264a6f212657eaf63b70598e9515b43168481deb050483e58099.jpg)



e


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/82ef3f272001cdf09a44f746812cdabbe6e1d941c5f515b3eeff51df7bcb0e54.jpg)



C


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/2cd6c78c4eb66a91155809de8a06d0b24f4dcba32317f268b3b4e6d6d5ddcb15.jpg)



f


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/becbbc79d1237923f087b27df95af8e7b01b14b49087a8179b07ba9a23fe4d3b.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/dec235fd431b672abbbd3e198d109cebb190de322f54fdbbb7f93943e96ea7ae.jpg)



FIGURE 3 Magnetic properties of dual-thickness CrTe nanoflakes. (a) The OM images of few-UC and multi-UC radial-shaped CrTe nanoflakes. Scale bars: 10 µm. (b) Temperature dependences of moment (M-T) for multi-UC and few-UC CrTe from 370 to 10 K with 0.05 T magnetic field using ZFC and FC tests. (c) Comparative analysis of $H _ { \mathrm { C } }$ in few-UC and multi-UC CrTe nanoflakes at 100 K. (d) OM image of the CrTe device featuring two distinct thickness regions and dual Hall electrode configurations. The thin and thick regions are outlined by blue and red dashed contours, respectively. The scale bar is 5 µm. (e) The AFM height analysis of the CrTe dual-hall electrode device. The scale bar is 5 µm. (f) Magnetic field dependence of the $R _ { \mathrm { x y } }$ in region I and region II. $\mathrm { ( g ) }$ Schematic illustration of the spin configuration for non-lavered CrTe below the $T _ { \mathrm { { C } } } .$ (h) Schematic illustrations of the magnetization reversal process of uniform and dual-thickness CrTe.


Building on this, we first performed MOKE observations on synthesized uniform nanoflakes (marked by the blue dashed box), which revealed only simple single-domain ferromagnetic states. By designing dual-thickness nanoflakes, we successfully synthesized and stabilized various complex intermediate magnetic domain states, including volcanic-, windmill-, bowl-, and radial-shaped configurations (marked by the red dashed box). 

For tri-thickness nanoflakes, we further observed two intermediate magnetic domain configurations (Figure 4d). Critically, all observed domain configurations precisely match the underlying height profile of the nanoflake, confirming that thickness variation within an individual nanoflake reliably serves as a spatial template for engineering antiparallel magnetic domains. We anticipate that more complex thickness profiles would enable an even borader range of designable magnetic domain structures, offering a robust route to stabilizing multiple magnetic states within individual nanoflakes. 

## 2.5 Thickness-Engineered CrTe Nanoflakes for Multi-State Memory Applications

CrTe nanoflakes with thickness-dependent stepwise magnetic reversal can generate multiple stable magnetic states, showing great potential for multi-state storage applications. We fabricate all-2D vertical spin valve devices with $\mathrm { W S } _ { 2 }$ as the tunnel barrier and multi-thickness CrTe as ferromagnetic 


b



C



d


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/fd2618e1a99714cb31004ba46c3a5f389e7673ee02046171b1ede2a1a86aa2a8.jpg)



FIGURE 4 Diverse magnetic domain configuration in multi-thickness CrTe nanoflakes. (a) The OM images, AFM images, and corresponding height profile of tri-thickness CrTe nanoflake. Scale bars: 10 µm. (b) Magnetic reversal process of the tri-thickness CrTe with various external magnetic fields. Scale bars: 10 µm. (c) Schematic illustrations of the magnetization reversal process of tri-thickness CrTe. (d) OM images and corresponding intermediate magnetic domain state (showing by MOKE images) of uniform CrTe nanoflake (blue dashed box), dual-thickness CrTe nanoflakes (red dashed box), and tri-thickness CrTe nanoflakes (orange dashed box). Scale bars: 10 µm.


layers, assembled via solvent-free dry transfer to ensure interface quality (Figure 5a, Methods). We design three vertical spin valve configurations to demonstrate the multi-state storage concept: (1) Uniform CrTe/WS /uniform CrTe (Device A); (2) Uniform CrTe/WS /dual-thickness CrTe (Device B); (3) Uniform CrTe/WS /tri-thickness CrTe (Device C) (Figure S19). In devices A and C, the WS barrier is a monolayer (∼0.6 nm), whereas in device B, it is a three-layer (∼2.0 nm). The trilayer WS provides enhanced tunneling resistance, leading to a higher overall resistance in device B compared to devices A and C. The vertical spin valve device based on multi-thickness CrTe nanoflakes exhibits tunable multi-state magnetoresistance. Device A (Figure 5b) exhibits conventional two stable magnetoresistance states; Device B (Figure 5c) demonstrates three stable magnetoresistance states; and Device C (Figure 5d) achieves four clearly distinguishable magnetoresistance states. Each state is characterized by the reversal of magnetization in a specific thickness region within the multi-thickness CrTe nanoflakes. Distinctively, the physically integrated and inseparable thicker, intermediate, and thinner regions within these multi-thickness nanoflakes inherently enable multiple degenerate magnetic and resistance states. By using these degenerate resistance states as “ciphertext” and a specific magnetic field as the “key”, this system naturally functions as a storage layer for encrypted information. In this scheme, the plaintext is encoded as spin states in the thicker CrTe region and concealed within a degenerate resistance state (e.g., R2). Only the correct magnetic key (0.330–0.502 T) reveals the information via a characteristic resistance transition, while an incorrect key results in failed decryption (Figures S20 and S21). Building on this, future efforts will aim to optimize the fabrication of vertical spin valves to achieve higher tunnel magnetoresistance (TMR) ratios, thereby enabling stable roomtemperature multi-state magnetic memory and spin-encrypted communication. 

## 3 Conclusion

In summary, we propose an SNNG model that enables the synthesis of four representative CrTe nanoflakes morphologies and controlled transition of individual nanoflakes from singlethickness to multi-thicknesses configurations. This approach highlights the strong correlation between local thickness and coercive field in room-temperature ferromagnetic CrTe, allowing precise manipulation of magnetic domain states in multi-thickness structures. The resulting multiple magnetic-domain states establish a promising platform for ultra-high-density storage and spin-encrypted communication. Future efforts will focus on integrating these room-temperature ferromagnetic materials into scalable device architectures for practical spintronic applications. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/14750f73a484cbfb39a9b7f0a0d6bef678914f52545d1c27568a4b026313c678.jpg)



b


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/1d394459dd206d63bf603642bffd078f3e7c6aa83cc42bd7e7dadaa8d23f2b74.jpg)



C


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/5fe46ab4bb614da99eff16f3dc43794fe45584427144584451c14e2457687f8e.jpg)



B(T)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/f3ff98f5b428a86a037205cc37461dd780e924a1e07454d493ad04c7177ab523.jpg)



d


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/e1c2c27711d3281a92f7909511ec389a1e6390607f4b2207278b234f0d8e994c.jpg)



B (T)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/6701500e5662ba6cd95ceb0b70d6f02d7eb84716e995638a6bf48611a9d4e801.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-07-01/de0816df-5970-423f-89f6-37681d78166b/f07c364651825ca91f349a908a581fd693c12d8e01e3dc32ab099de81526325a.jpg)



B (T)



FIGURE 5 Multi-thickness CrTe vertical spin valves for multi-state storage. (a) Schematic process of integrating the multi-thickness $\mathrm { C r T e } / \mathrm { W S } _ { 2 } / \mathrm { C r T e }$ spin valve by dry aligned transfer. (b–d) device structure illustration and background-subtracted $R _ { \mathrm { J u n c t i o n } ^ { - B } }$ curve for (b) uniform $\mathrm { C r T e } / \mathrm { W } \mathrm { S } _ { 2 } /$ /uniform CrTe spin valve (Device A), (c) uniform CrTe/WS /dual-thickness CrTe spin valve (Device B), and (d) uniform $\mathrm { C r T e } / \mathrm { W S } _ { 2 } / \mathrm { t r i } { \cdot }$ thickness CrTe spin valve (Device $\mathrm { C } ) ,$ respectively.


## 4 Experimental Section

## 4.1 Synthesis of Multi-Thickness CrTe Nanoflakes

2D multi-thickness CrTe were synthesized on $\mathrm { S i O } _ { 2 } / \mathrm { S i }$ substrates via Atmospheric Pressure Chemical Vapor Deposition (APCVD). The reaction was conducted in a one-inch quartz tube heated by a dual-zone tube furnace (Zhonghuan). ∼30 mg Te granules (99.99%, Macklin) were put at the upstream as the Te source, the temperature of which is set at ${ \sim } 5 7 0 ^ { \circ } \mathrm { C } . \ { \sim } 3 0$ mg anhydrous chromium trichloride (99.9%, Alfa Aesar) and ∼4 mg molecular sieve (4A, Konoscience) mixture was placed in an alumina boat downstream and heated to ${ \sim } 6 4 5 ^ { \circ } \mathrm { C }$ for CrTe growth. Substrates were placed face-down on the $\mathrm { C r C l } _ { 3 }$ and molecular sieve mixture, ranging from 4.0 to 0.7 mm. The quartz tube was purged with high-purity argon gas (Ar, 99.999%) at a flow rate of 600 sccm for 10 min. The growth process was then initiated by introducing a mixed gas flow of 50 sccm $\mathrm { H } _ { 2 }$ and 40 sccm Ar. The furnace temperature was subsequently ramped from room temperature to $5 7 0 ^ { \circ } \mathrm { C }$ and $6 4 5 ^ { \circ } \mathrm { C }$ within 30 min, followed by a 2 min stabilization period at the target temperature for sample growth. After the reaction completes, the furnace naturally cools down to room temperature. Eventually, specific shapes of CrTe nanoflakes are deposited on the bottom surface of $\mathrm { S i O } _ { 2 } / \mathrm { S i }$ substrates located at different positions. 

## 4.2 Synthesis of CrTe/WS Heterojunction

CrTe/WS vertical heterostructures were synthesized using twostep CVD technology. Initially, $\mathrm { W S } _ { 2 }$ nanoflakes were synthesized on $\mathrm { S i O } _ { 2 } / \mathrm { S i }$ substrates via physical vapor deposition (PVD) at $1 2 0 0 ^ { \circ } \mathrm { C }$ with an Ar flow rate of 80 sccm for 3–5 min. Using these freshly prepared $\mathrm { W S } _ { 2 }$ nanoflakes as growth substrates, we then reduced the temperature to $6 1 5 ^ { \circ } \mathrm { C }$ to enable selective nucleation and epitaxial growth of CrTe, ultimately forming vertical $\mathrm { C r T e } / \mathrm { W } \mathrm { S } _ { 2 }$ heterostructures. 

## 4.3 Wetting Transfer Method of CrTe Nanoflakes

CrTe nanoflakes with various shapes were transferred from $\mathrm { S i O } _ { 2 } / \mathrm { S i }$ onto TEM grids via the wet-transfer method for TEM and STEM characterization. First, the polymethyl methacrylate (PMMA) was spin-coated onto $\mathrm { S i O } _ { 2 } / \mathrm { S i }$ at 4000 rpm for 45 s and then heated at $1 0 5 ^ { \circ } \mathrm { C }$ for 2 min. Subsequently, PMMA with CrTe nanoflakes was stripped off in saturated sodium hydroxide solution and then covered onto TEM grids. Then, the PMMA films with CrTe-covered TEM grids were dried at $7 0 ^ { \circ } \mathrm { C }$ for about 10 min. Finally, PMMA was removed by immersing in acetone and isopropanol successively. 

## 4.4 Dry Transfer for CrTe/WS /CrTe Vertical Spin Valves

The $\mathrm { C r T e } / \mathrm { W } \mathrm { S } _ { 2 }$ heterostructures grown on $\mathrm { S i O } _ { 2 } / \mathrm { S i }$ substrate were treated by hexamethyldisilazane (HMDS) at 80<sup>◦</sup>C for 6 to 10 min. Then the PMMA was spin-coated onto CrTe/WS heterostructures at 2000 rpm for 45 s, followed by baking at 105<sup>◦</sup>C for 2 min. Through pre-functionalization with HMDS, the PMMA layer demonstrated diminished adhesion to the SiO /Si substrate, facilitating mechanical release via a PDMS stamp, along with the underlying 2D heterostructures. To facilitate the easier release of 2D heterostructures, the small silicon pellet was sequentially immersed in hot water $\mathrm { ( { \approx } 8 0 ^ { \circ } C ) }$ and then in ice water for 0 to 10 min. This process further weakened the interaction force between the 2D materials and the $\mathrm { S i O } _ { 2 }$ substrate. Spin valves were then fabricated by transferring 2D heterostructures onto a freshly grown CrTe nanoflake using a conventional alignment transfer technique. At last, Au electrodes for spin valves were fabricated by e-beam evaporation. 

## 4.5 Materials Characterization

The morphology of 2D CrTe nanoflakes was characterized by an optical microscope (Nexcope NM910). The thickness of nanoflakes was measured by an atomic force microscope (Bioscope system, BRUCKER). The atomic structures of nanoflakes were characterized by an aberration-corrected scanning transmission electron microscope (Titan Cubed Themis G2 300). The SAED patterns were recorded by transmission electron microscopy (JEM-F200). VSM data and the electromagnetic transport properties of CrTe nanoflakes and CrTe/WS /CrTe spin valves were gathered with a Quantum Design physical property measurement system (DynaCool, Quantum Design). MOKE images were acquired by MOKE microscopy (Truth Instruments and TTT-02-Kerr, Tuotuo Technology). 

## 4.6 Density Functional Theory Calculations

All DFT calculations were performed employing the Vienna ab initio Simulation Package (VASP 5.4.1) [54]. The interactions between core and valence electrons were modeled using the projected augmented wave (PAW) [55] method combined with a plane-wave basis set. The exchange-correlation effects were treated with the Perdew-Burke-Ernzerhof (PBE) [56] functional under the generalized gradient approximation (GGA). A 

Monkhorst-Pack k-point grid of $3 \times 3 \times 1$ was utilized to sample the Brillouin zone of all configurations. The adsorption energy was calculated as $E _ { \mathrm { a d s } } = E _ { \mathrm { s l a b + c l u s t e r } } { - } E _ { \mathrm { s l a b - E c l u s t e r } } .$ . A consistent plane-wave cutoff energy of 520 eV was applied in all simulations. To minimize periodic interactions, a vacuum layer of 20 Å was introduced perpendicular to the surface. The convergence thresholds for electronic relaxation were set at 10<sup>−5</sup> eV for energy and 0.01 eV/Å for atomic forces. 

## Author Contributions

Y.H. conceived the study. B.L. and K.H. synthesized materials. B.Z. built the theoretical model and performed DFT calculations. B.L., K.H., and R.W. performed the magnetic measurements. B.L., Y.H., J.H., Z.M., G.H., and L.P. conducted STEM and TEM characterizations. B.L., C.Y., Z.Z., $\mathrm { Z . F . , }$ , and S.L. performed the device fabrication. Y.H., B.L., K.H., and B.Z. co-wrote the manuscript. All the authors discussed the results and contributed to preparing the manuscript. 

## Acknowledgements

The authors acknowledge support from the National Key Research and Development Program of China (Nos. 2022YFA1204003, 2022YFA1203902 and 2025YFA1411002). the National Natural Science Foundation of China (Nos. 92263203, 52501306 and 52402331), and the China Postdoctoral Science Foundation (No. 2024M750087). 

## Conflicts of Interest

The authors declare no conflicts of interest. 

## Data Availability Statement

The data that support the findings of this study are available from the corresponding author upon reasonable request. 

## References



1. H. Yang, S. O. Valenzuela, M. Chshiev, et al., “Two-dimensional Materials Prospects for Non-volatile Spintronic Memories." Nature 606 (2022): 663–673, https://doi.org/10.1038/s41586-022-04768-0. 





2. C. Chappert, A. Fert, and F. N. Van Dau, “The Emergence of Spin Electronics in Data Storage,” Nature Materials 6 (2007): 813–823, https:// doi.org/10.1038/nmat2024. 





3. B. Tong, J. Xu, J. Du, et al., “2D (NH )BiI enables Non-volatile Optoelectronic Memories for Machine Learning,” Nature Communications 16 (2025): 1609, https://doi.org/10.1038/s41467-025-56819-5. 





4. Y. Zhang, W. Sun, K. Cao, et al., “Electric-field Control of Nonvolatile Resistance state of Perpendicular Magnetic Tunnel Junction via Magnetoelectric Coupling,” Science Advances 10 (2024): adl4633, https://doi.org/ 10.1126/sciadv.adl4633. 





5. K. He, B. Li, J. Nie, et al., “Two-Dimensiona $\mathrm { C r } _ { 3 } \mathrm { T e } _ { 4 } / \mathrm { W S } _ { 2 } / \mathrm { F e } _ { 3 } \mathrm { G e T e } _ { 2 }$ /WTe Magnetic Memory with Field-Free Switching and Low Power Consumption,” Advanced Materials 37 (2025): 2419939, https://doi.org/10. 1002/adma.202419939. 





6. L. Liu, D. Wang, D. Wang, et al., “Domain Wall Magnetic Tunnel Junction-based Artificial Synapses and Neurons for all-spin Neuromorphic Hardware,” Nature Communications 15 (2024): 4534, https://doi.org/ 10.1038/s41467-024-48631-4 





7. Z. Luo, A. Hrabec, T. P. Dao, et al., “Current-driven Magnetic Domainwall Logic,” Nature 579 (2020): 214–218, https://doi.org/10.1038/s41586- 020-2061-y. 





8. P. Stevenson, “Reconfigurable Magnetic Order in 2D Materials,” Nature Materials 24 (2025): 1324–1325, https://doi.org/10.1038/s41563-025-023 04-9. 





9. W. Chen, Z. Sun, Z. Wang, et al., “Direct Observation of van der Waals Stacking–dependent Interlayer Magnetism,” Science 366 (2019): 983–987, https://doi.org/10.1126/science.aav1937. 





10. G. Zhao, Y. Zhao, Y. Zhang, et al., “Doping-induced Magnetic Phase Transition Enables All-electrical Spin Control in CrSBr,” Nature Communications 17 (2025): 853, https://doi.org/10.1038/s41467-025-675 61-3. 





11. S. Yang, X. Xu, B. Han, et al., “Controlling the 2D Magnetism of CrBr by van der Waals Stacking Engineering,” Journal of the American Chemical Society 145 (2023): 28184–28190, https://doi.org/10.1021/jacs. 3c10777. 





12. Z. Tao, B. Shen, W. Zhao, et al., “Giant Spin Hall Effect in AB-stacked MoTe /WSe Bilayers,” Nature Nanotechnology 19 (2024): 28–33, https:// doi.org/10.1038/s41565-023-01492-2. 





13. G. Zhang, H. Wu, L. Yang, et al., “Above-Room-Temperature Ferromagnetism Regulation in Two-Dimensional Heterostructures by van der Waals Interfacial Magnetochemistry,” Journal of the American Chemical Society 146 (2024): 34070–34079, https://doi.org/10.1021/jacs.4c13391. 





14. Q. Liu, W. Su, Y. Gu, et al., “Surprising Pressure-induced Magnetic Transformations from Helimagnetic Order to Antiferromagnetic state in NiI ,” Nature Communications 16 (2025): 4221, https://doi.org/10.1038/ s41467-025-59561-0. 





15. X. Han, M. Niu, Y. Luo, et al., “Atomically Engineering Metal Vacancies in Monolayer Transition Metal Dichalcogenides,” Nature Synthesis 3 (2024): 586–594, https://doi.org/10.1038/s44160-024-00501-z. 





16. J. Seo, D. Y. Kim, E. S. An, et al., “Nearly Room Temperature Ferromagnetism in a Magnetic Metal-rich van der Waals Metal,” Science Advances 6 (2020): aay8912, https://doi.org/10.1126/sciadv.aay 8912. 





17. Y. Wu, S. Zhang, J. Zhang, et al., “Néel-type Skyrmion in WTe /Fe GeTe van der Waals Heterostructure,” Nature Communications 11 (2020): 3860, https://doi.org/10.1038/s41467-020-17566-x. 





18. J. Lee, J. Gu, W. Kim, et al., “Terrace-Edge-Induced Domain Nucleation in Room-Temperature 2D Magnetic Van Der Waals Heterostructures,” Advanced Functional Materials 36 (2026): 16597, https://doi.org/ 10.1002/adfm.202516597. 





19. C. Boix-Constant, S. Jenkins, R. Rama-Eiroa, E. J. G. Santos, S. Mañas-Valero, and E. Coronado, “Multistep Magnetization Switching in Orthogonally Twisted Ferromagnetic Monolayers,” Nature Materials 23 (2024): 212–218, https://doi.org/10.1038/s41563-023-01735-6. 





20. H. Xie, X. Luo, G. Ye, et al., “Twist Engineering of the Two-dimensional Magnetism in Double Bilayer Chromium Triiodide Homostructures,” Nature Physics 18 (2022): 30–36, https://doi.org/10.1038/s41567-021-01408-8. 





21. X. Gao, K. Wang, K. Zhai, et al., “Modulation of Magnetic Domain and the Occurrence of Antisymmetric Magnetoresistance in the Folded van der Waals Ferromagnet Fe GaTe ,” Advanced Materials 37 (2025): 2420505, https://doi.org/10.1002/adma.202420505. 





22. J. Cenker, S. Sivakumar, K. Xie, et al., “Reversible Strain-induced Magnetic Phase Transition in a van der Waals Magnet,” Nature Nanotechnology 17 (2022): 256–261, https://doi.org/10.1038/s41565-021-010 52-6. 





23. G. He, R. Gong, Z. Wang, et al., “Probing Stress and Magnetism at High Pressures with Two-dimensional Quantum Sensors,” Nature Communications 16 (2025): 8162, https://doi.org/10.1038/s41467-025-635 35-7. 





24. Y. Wang, C. Wang, S.-J. Liang, et al., “Strain-Sensitive Magnetization Reversal of a van der Waals Magnet,” Advanced Materials 32 (2020): 2004533, https://doi.org/10.1002/adma.202004533. 





25. S. Jin, Y. Liu, Z. Deng, et al., “Strain Gradient Induced Skyrmion in a van der Waals Magnet by Wrinkling,” Advanced Materials 37 (2025): 2501935, https://doi.org/10.1002/adma.202501935. 





26. X. Zhang, P. Li, and G. Bian, “Advances in 2D Magnetic Chromium Tellurides: Synthesis, Characterization, and Spintronic Applications,” Reports on Progress in Physics 88 (2025): 086501, https://doi.org/10.1088/ 1361-6633/adef66. 





27. J. Yang, C. Zhu, Y. Deng, B. Tang, and Z. Liu, “Magnetism of Twodimensional Chromium Tellurides,” Iscience 26 (2023): 106567, https:// doi.org/10.1016/j.isci.2023.106567. 





28. B. Tang, X. Wang, M. Han, et al., “Phase Engineering of Cr Te with Colossal Anomalous Hall Effect Te with Colossal Anomalous Hall Effect,” Nature Electronics 5 (2022): 224–232, https://doi.org/10.1038/ s41928-022-00754-6. 





29. B. Li. X. Deng, W. Shu, et al., “Air-stable Ultrathin Cr₂Te, Nanosheets with Thickness-dependent Magnetic Biskyrmions,” Materials Today 57 (2022): 66–74, https://doi.org/10.1016/j.mattod.2022.04.011. 





30. L. Meng, Z. Zhou, M. Xu, et al., “Anomalous Thickness Dependence of Curie Temperature in Air-stable Two-dimensional Ferromagnetic 1T-CrTe Grown by Chemical Vapor Deposition,” Nature Communications 12 (2021): 809, https://doi.org/10.1038/s41467-021-21072-z. 





31. H. Matsuoka, S. Kajihara, T. Nomoto, et al., “Band-driven Switching of Magnetism in a van der Waals Magnetic Semimetal,” Science Advances 10 (2024): adk1415, https://doi.org/10.1126/sciadv.adk1415. 





32. C. Chen, X. Chen, C. Wu, et al., “Air-Stable 2D Cr Te Nanosheets with Thickness-Tunable Ferromagnetism,” Advanced Materials 34 (2022): 2107512, https://doi.org/10.1002/adma.202107512. 





33. H. Wu, W. Zhang, L. Yang, et al., “Strong Intrinsic Room-temperature Ferromagnetism in Freestanding Non-van der Waals Ultrathin 2D Crystals,” Nature Communications 12 (2021): 5688, https://doi.org/10.1038/ s41467-021-26009-0. 





34. Y.-X. Wang, T. K. M. Graham, R. Rama-Eiroa, et al., “Configurable Antiferromagnetic Domains and Lateral Exchange Bias in Atomically Thin CrPS ,” Nature Materials 24 (2025): 1414–1423, https://doi.org/10. 1038/s41563-025-02259-x. 





35. X. Yang, Y. Wang, C. Lu, et al., “Tailoring Néel Orders in Layered Topological Antiferromagnet MnBi Te ,” Physical Review Letters 135 (2025): 266704, https://doi.org/10.1103/pjrh-bqjf. 





36. D. Zhao, L. Zhang, I. A. Malik, et al., “Observation of Unconventional Anomalous Hall Effect in Epitaxial CrTe Thin Films,” Nano Research 11 (2018): 3116–3121, https://doi.org/10.1007/s12274-017-1913-8. 





37. L. Meng, Z. Zhou, M. Xu, et al., “Anomalous Thickness Dependence of Curie Temperature in Air-stable Two-dimensional Ferromagnetic 1T-CrTe Grown by Chemical Vapor Deposition,” Nature Communications 12 (2021): 809, https://doi.org/10.1038/s41467-021-21072-z. 





38. B. Li, Z. Wan, C. Wang, et al., “Van der Waals Epitaxial Growth of Air-stable CrSe, Nanosheets with Thickness-tunable Magnetic Order." Nature Materials 20 (2021): 818–825, https://doi.org/10.1038/s41563-021- 00927-2. 





39. Z. Zhao, X. Han, S. Zhu, et al., “The Evolution of Chemical Ordering and Property in Fe Se Upon Intercalation Ratios,” National Science Review 12 (2025): nwae430, https://doi.org/10.1093/nsr/nwae430. 





40. H. Wang, Z. Yao, G. S. Jung, et al., “Frank-van der Merwe Growth in Bilayer Graphene,” Matter 4 (2021): 3339–3353, https://doi.org/10.1016/j. matt.2021.08.017. 





41. R. Li, Z. Yao, Z. Li, et al., “Mechanical Exfoliation of Non-layered Metal Oxides into Ultrathin Flakes,” Nature Synthesis 4 (2025): 106–115, https:// doi.org/10.1038/s44160-024-00657-8. 





42. B. Zhang, C. Yun, H. Wu, et al., “Two-Dimensional Wedge-Shaped Magnetic EuS: Insight into the Substrate Step-Guided Epitaxial Synthesis on Sapphire,” Journal of the American Chemical Society 144 (2022): 19758–19769, https://doi.org/10.1021/jacs.2c06023 





43. R. Cheng, L. Yin, Y. Wen, et al., “Ultrathin Ferrite Nanosheets for Room-temperature Two-dimensional Magnetic Semiconductors,” Nature Communications 13 (2022): 5241, https://doi.org/10.1038/s41467- 022-33017-1. 





44. L. Zhou, K. Xu, A. Zubair, et al., “Role of Molecular Sieves in the CVD Synthesis of Large-Area 2D MoTe ,” Advanced Functional Materials 27 (2017): 1603491, https://doi.org/10.1002/adfm.201603491. 





45. F. Li, Y. Feng, Z. Li, et al., “Rational Kinetics Control toward Universal Growth of 2D Vertically Stacked Heterostructures,” Advanced Materials 31 (2019): 1901351, https://doi.org/10.1002/adma.201901351. 





46. J. Li, X. Yang, Y. Liu, et al., “General Synthesis of Two-dimensional van der Waals Heterostructure Arrays,” Nature 579 (2020): 368–374, https:// doi.org/10.1038/s41586-020-2098-y. 





47. H. Shu, X.-M. Tao, and F. Ding, “What Are the Active Carbon Species during Graphene Chemical Vapor Deposition Growth?,” Nanoscale 7 (2015): 1627–1634, https://doi.org/10.1039/C4NR05590J. 





48. Z. Zhang, Y. Gong, X. Zou, et al., “Epitaxial Growth of Two-Dimensional Metal–Semiconductor Transition-Metal Dichalcogenide Vertical Stacks (VSe /MX ) and Their Band Alignments,” ACS Nano 13 (2019): 885–893, https://doi.org/10.1021/acsnano.8b08677. 





49. G. Eda, T. Fujita, H. Yamaguchi, D. Voiry, M. Chen, and M. Chhowalla, “Coherent Atomic and Electronic Heterostructures of Single Layer MoS ,” ACS Nano 6 (2012): 7311–7317, https://doi.org/10.1021/ nn302422x. 





50. X. Zhang, Q. Lu, W. Liu, et al., “Room-temperature Intrinsic Ferro magnetism in Epitaxial CrTe Ultrathin Films,” Nature Communications 12 (2021): 2492, https://doi.org/10.1038/s41467-021-22777-x. 





51. Y. Hou and R. Wu, “Magnetic Anisotropy in 2D van der Waals Mag netic Materials and Their Heterostructures: Importance, Mechanisms, and Opportunities,” Advanced Functional Materials 35 (2025): 09453, https://doi.org/10.1002/adfm.202509453. 





52. T. Yang, Q. Tang, T. Lin, J. Han, and B. Xu, “Demagnetization Field Simulation in Hexagonal Magnetic Materials via Fast Fourier Transform,” Computational Materials Science 247 (2025): 113497, https://doi.org/10. 1016/j.commatsci.2024.113497. 





53. F. L. Durhuus, E. Fogh, T. Jauho, and M. Beleggia, “Demagnetization Factors and Field of Hemispherical Objects,” Journal of Magnetism and Magnetic Materials 626 (2025): 173047, https://doi.org/10.1016/j.jmmm. 2025.173047 





54. G. Kresse and J. Furthmüller, “Efficiency of Ab-initio Total Energy Calculations for Metals and Semiconductors Using a Plane-wave Basis Set,” Computational Materials Science 6 (1996): 15–50, https://doi.org/10. 1016/0927-0256(96)00008-0. 





55. P. E. Blöchl, “Projector Augmented-Wave Method,” Physical Review B 50 (1994): 17953–17979, https://doi.org/10.1103/PhysRevB.50.17953. 





56. J. P. Perdew, K. Burke, and M. Ernzerhof, “Generalized Gradient Approximation Made Simple,” Physical Review Letters 77 (1996): 3865– 3868, https://doi.org/10.1103/PhysRevLett.77.3865. 



## Supporting Information

Additional supporting information can be found online in the Supporting Information section. 

Supporting File: adma73853-sup-0001-SuppMat.pdf. 