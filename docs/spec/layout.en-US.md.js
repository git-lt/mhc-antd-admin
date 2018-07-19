webpackJsonp([32],{1663:function(e,t){e.exports={content:["article",["p","Spatial layout is the starting point of systematic visual design. The difference from traditional graphic design is that the layout space of UI interface should be based on the dynamic and systematic perspective. We were inspired by the architectural ethic of the architect Le Corbusier and explored the dynamic spatial order in UI design and formed the interface layout of Ant Design based on the principle of 'beauty of order', making it possible for designers to create spatial layout that comes with rational beauty."],["p","While defining the layout system in a visual system, we propose to start from the following 5 aspects:\uff1a"],["ol",["li",["p","Unified Canvas Dimension"]],["li",["p","Adaptation"]],["li",["p","Grid Unit"]],["li",["p","Raster"]],["li",["p","Common Scales"]]],["h2","Unified Design Board Dimension"],["p","In order to minimize communication cost, it is necessary to unify the size of the design board within the organization. E.g., the unified design board width of the ant design team is 1440."],["h2","Adaptation"],["p","In the design process, the designer also needs to establish the concept of adaptation. Decision needs to made for things like whether a system needs to be adapted depends on the specific situation, and/or what are the blocks that needs dynamic layout. According to statistics, mainstream screen resolution includes  1920, 1440, and 1366. Some devices still have resolution of 1280."],["p","Ant Design's two typical adaptation type:"],["h3","1. Left-Right Layout"],["p","Commonly used in design schemes for left and right layouts, the common practice is to fix the left navigation bar and dynamically scale the right work area."],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/vSqMhPolCtINKLvVVdLt.png",alt:"Left-Right Layout"}]],["h3","2. Top-Bottom Layout"],["p","Common used in design schemes for top and bottom layouts. The practice is to define the minimum value for the marginal areas on both sides. After the blanking area reaches the limit value, the intermediate main content area is dynamically scaled."],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/VQEiJqtZfvvdyZSKcEsE.png",alt:"Top-Bottom Layout"}]],["p","The above are just two simple adaptation ideas, the actual design of a perfect adaptation program requires the designer to have front end perspective, plane composition perspective and interactive perspective."],["h2","Grid Unit"],["p","Ant Design uses the grid system to achieve the order of the visual system. The base unit of the grid is 8, which not only matches the even number of ideas but also matches most mainstream display devices. Grid system thinking can help designers quickly achieve design decisions in the layout space while simplifying communication between designers developers."],["h2","Raster"],["p","Ant Design uses a 24-grid architecture. Taking the structure of the 1440 top-bottom layout as an example, the content area with a width of 1168 is divided into 24 grids, as shown in the following picture. We set the value of the Gutter of the grid in the page, such that when the browser expands or shrinks in a certain range, the column width of the grid will expand or shrink accordingly, but the width of Gutter is always fixed."],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/YPUZpPCzFgQHVxXCIAzq.png",alt:"Raster layout"}]],["p","For developers, the grid is a way to achieve dynamic layout, however the designer's understanding of the grid is derived from the grid in the graphic design. Differences of the perspectives are likely to cause deviations that ultimately affect the degree of visual restoration, which in turn increases communication costs."],["p","Ant Design's designers keep the following 4 things in mind in the communication with engineers:"],["ol",["li",["p","Clear definition of dynamic layout area"]],["li",["p","Try to always use even numbers"]],["li",["p","Delivery of critical numbers (Gutter\u3001Column)"]],["li",["p","Always use beginning column and ending column to define blocks."]]],["h2","Common Scales"],["p","AntFin's projects cover a large number of products of different types and even different orders of magnitude. In order to help designers of various levels to have consistency and similar rhythm in designing page layout, to unify designing language and reduce the restoration losses, Ant Design proposed the concept of UI common scales. From a large amount of practices, we have extracted a set of arrays that can be used as dimensions for UI layout decision. All the numbers are multiples of 8 and have a dynamic sense of rhythm. After verification, it can help us to achieve a faster and better design decision making of layout design."],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/ZBeDQMLMHLRfmUlUaaII.png",alt:"The two arrays"}]],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/QWsZUeuqYGQJqJxIPHOx.png",alt:"Common Usages"}]],["h2","Inspiration, But Not Limitation"],["p",'The result of Ant Design in layout space is not to limit design output, but to guide designers to do it better. The two 8-fold array can be made into a myriad of possibilities by permutations and combinations, but there is a difference between "simply applying a permutation" and "really well designed". We need to consider availability in the pursuit of beauty, and we\'re still on our way to achieve a design system that is both reasonable and elegant. There are still plenty of things to explore for enterprise-level application interface layout.\ntranslate-layout']],meta:{category:"Visual",order:2,title:"Layout",filename:"docs/spec/layout.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Unified-Design-Board-Dimension",title:"Unified Design Board Dimension"},"Unified Design Board Dimension"]],["li",["a",{className:"bisheng-toc-h2",href:"#Adaptation",title:"Adaptation"},"Adaptation"]],["li",["a",{className:"bisheng-toc-h2",href:"#Grid-Unit",title:"Grid Unit"},"Grid Unit"]],["li",["a",{className:"bisheng-toc-h2",href:"#Raster",title:"Raster"},"Raster"]],["li",["a",{className:"bisheng-toc-h2",href:"#Common-Scales",title:"Common Scales"},"Common Scales"]],["li",["a",{className:"bisheng-toc-h2",href:"#Inspiration,-But-Not-Limitation",title:"Inspiration, But Not Limitation"},"Inspiration, But Not Limitation"]]]}}});