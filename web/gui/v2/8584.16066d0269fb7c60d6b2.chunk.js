!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="798ceeda-b4f4-434a-890a-ca0117155fa1",e._sentryDebugIdIdentifier="sentry-dbid-798ceeda-b4f4-434a-890a-ca0117155fa1")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"2cf38a68974d9b3eec7e06942a3de12160049f5f"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[8584],{16978:function(e,t,n){var a=n(87462),r=n(67294),o=n(54576),l=n(70486),c=n(86954),i=n(20581),s=n(16374),u=n(1981),d=n(28138),m=n(18892),g=n(63076),f=n(65855),p=(0,r.forwardRef)((function(e,t){return r.createElement(c.ChartWrapper,null,r.createElement(f.x1,(0,a.Z)({hasHeader:!1,hasFilters:!1,hasFooter:!1},e,{ref:t})))})),h=(0,l.default)(p,{tile:!0}),v={dygraph:f.ZP,easypiechart:d.ZP,gauge:s.ZP,number:m.ZP,groupBoxes:i.ZP,d3pie:u.default,bars:g.ZP},E=function(e){var t=(0,o.useChart)(),n=(0,r.useMemo)((function(){if(!t)return null;var e=t.getAttributes(),n=e.chartLibrary;return e.sparkline?h:v[n]}),[t]);return n?r.createElement(n,(0,a.Z)({},e,{chart:t})):null};t.Z=(0,o.withChartProvider)((0,r.memo)(E))},20686:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(87462),r=n(45987),o=n(67294),l=n(59978),c=n(71893),i=(0,c.default)(l.Icon).attrs({width:12,height:14}).withConfig({displayName:"styled__StyledIcon",componentId:"sc-z9l478-0"})([""]),s=(0,c.default)(l.Flex).attrs({alignItems:"center",justifyContent:"center",padding:[.5,2],round:9}).withConfig({displayName:"styled__StyledPill",componentId:"sc-z9l478-1"})(["cursor:pointer;pointer-events:",";"],(function(e){return e.onClick?"auto":"none"})),u={critical:{background:"errorSemi",color:"error",border:{side:"all",color:"error"}},warning:{background:"warningSemi",color:"warning",border:{side:"all",color:"warning"}},neutral:{background:"generic",color:"text",border:{side:"all",color:"border"}},clear:{background:"successSemi",color:"success",border:{side:"all",color:"success"}},criticalAlertsTable:{background:"errorSemi",color:"error",border:{side:"all",color:"error"}},warningAlertsTable:{background:"warningSemi",color:"warning",border:{side:"all",color:"warning"}},clearAlertsTable:{background:"successSemi",color:"success",border:{side:"all",color:"success"}}},d=["type","icon","children","textSize"],m={small:l.TextSmall,normal:l.Text},g=function(e){var t=e.type,n=e.icon,c=e.children,g=e.textSize,f=(0,r.Z)(e,d),p=u[t]||{},h=p.background,v=p.color,E=p.border,x=g?m[g]:n?l.Text:l.TextMicro;return o.createElement(s,(0,a.Z)({background:h,border:E,gap:1.5},f),n&&o.createElement(i,{name:n,title:n,color:v}),c&&o.createElement(x,{color:v,textTransform:"capitalize",strong:!0,wordBreak:"keep-all",whiteSpace:"nowrap"},c))}},50709:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(29439),r=n(67294),o=n(59978),l=n(12008),c=(n(92222),n(74916),n(15306),n(26398)),i=n(91008),s=n(37518),u=n(12899),d=function(e){var t=e.alertId,n=(0,l.E5)(t),d=n.name,m=function(e){var t=(0,r.useState)(!0),n=(0,a.Z)(t,2),o=n[0],l=n[1],i="".concat("https://community.netdata.cloud/t","/").concat(null===e||void 0===e?void 0:e.replace(/[._]/g,"-"));return(0,r.useEffect)((function(){e&&c.Z.get(i).then((function(){return l(!1)})).catch((function(){return l(!0)}))}),[e]),[i,o]}(void 0===d?"unknown alert":d),g=(0,a.Z)(m,2),f=g[0],p=g[1],h=(0,s.UL)(),v=(0,u.R3)(),E=(0,a.Z)(v,2)[1],x=(0,r.useMemo)((function(){return{alignSelf:"start",onClick:function(){return E({roomId:h,alert:n})}}}),[f,p,E]);return r.createElement(i.Z,x,"Learn more about this alert",!p&&r.createElement(o.Icon,{name:"arrow_left",rotate:2,size:"small",margin:[0,0,-.75,1],color:"success"}))}},80854:function(e,t,n){var a=n(87462),r=n(45987),o=n(67294),l=n(59978),c=["iconName","iconSize","children"];t.Z=function(e){var t=e.iconName,n=e.iconSize,i=e.children,s=(0,r.Z)(e,c);return o.createElement(l.Flex,(0,a.Z)({gap:2,alignItems:"center"},s),o.createElement(l.Icon,(0,a.Z)({name:t,color:"textLite"},n&&{height:n,width:n})),o.createElement(l.Text,{strong:!0},i))}},29876:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(87462),r=n(45987),o=n(67294),l=n(59978),c=n(12008),i=(n(92222),n(89405)),s=n(50358),u=n(39840),d=function(e){var t=e.label,n=e.testid,a=e.status,r=e.value,c=e.when,d=e.units,m=(0,i.rA)(),g=m.localeTimeString,f=m.localeDateString,p=(0,o.useMemo)((function(){var e=new Date(1e3*c);return e&&"".concat(f(e,{long:!1})," ").concat(g(e,{secs:!0}))}),[c,f,g]),h=(0,u.pK)(r,d);return o.createElement(l.Flex,{gap:2,alignItems:"center"},o.createElement(l.Flex,{width:"100px"},o.createElement(l.TextSmall,null,t)),o.createElement(l.Flex,{gap:2,alignItems:"center"},o.createElement(l.TextSmall,{color:"text","data-testid":"".concat(n,"-dateTime")},p),o.createElement(s.Z,{loaded:!0,status:a,valueWithUnit:h,"data-testid":"".concat(n,"-value")})))},m=["alertId"],g=function(e){var t=e.alertId,n=(0,r.Z)(e,m),i=(0,c.E5)(t),s=i.fullyLoaded,u=void 0!==s&&s,g=i.units,f=i.lastStatusChangeValue,p=i.lastStatusChange,h=i.status,v=i.lastUpdated,E=i.value;i.prevStatus,i.prevValue,i.prevDuration;return u?o.createElement(l.Flex,(0,a.Z)({gap:2,column:!0,"data-testid":"alertValues"},n),v&&o.createElement(d,{label:"Latest",status:h,testid:"alertValues-latest",value:E,when:v,units:g}),p&&o.createElement(d,{label:"Triggered",status:h,testid:"alertValues-triggered",value:f,when:p,units:g})):null}},92253:function(e,t,n){n(92222);var a=n(67294),r=n(16978),o=n(59978),l=n(91128),c=n(78266),i=n(74059),s=n(37518),u=n(9058),d=n(22648),m=n(39840),g=function(e){return function(t){return"alert-modal::".concat(e.getAttribute("id"),"::").concat(t)}},f={width:"108px",height:"77px"};t.Z=function(e){var t=e.instance,n=e.context,p=e.isFormattedValueLoaded,h=e.nodeId,v=e.status,E=e.lastStatusChange,x=e.formattedLastStatusChangeValue,w=e.lastUpdated,b=e.spaceId,y=e.roomId,S=(0,i.th)();b=b||S;var k=(0,s.UL)();y=y||k;var Z=(0,d.m)(),I=(0,u.e)(),C=(0,l.Z)();(0,a.useEffect)((function(){return C(),C}),[]);var T=(0,i.Q6)(),_=(0,a.useMemo)((function(){if(p){var e=I.makeChart({attributes:{nodeId:h,contextScope:[n],selectedInstances:t&&h?["".concat(t,"@").concat(h)]:[],id:t,roomId:y,enabledHeightResize:!1,enabledResetRange:!1,overlays:{proceeded:{type:"proceeded"},alarm:{type:"alarm",status:v,value:x,when:E}},host:T?"".concat(window.envSettings.agentApiUrl,"/api/v2"):"".concat(window.envSettings.apiUrl,"/api/v3/spaces/").concat(b,"/rooms/").concat(y),nodesScope:[h],toolboxElements:[],sparkline:Z,hasToolbox:!Z},makeTrack:g});return I.getRoot().appendChild(e),e}}),[t,p]);return(0,m.Wi)({lastUpdated:w,lastStatusChange:E},p),(0,a.useEffect)((function(){return function(){return _&&_.destroy()}}),[_]),a.createElement(o.Flex,{flex:!1,width:"100%",height:75},p&&_?a.createElement(r.Z,{"data-chartid":t,chart:_,hasHeader:!Z,hasFooter:!Z}):a.createElement(c.Z,{iconProps:f,title:"Loading chart..."}))}},63860:function(e,t,n){var a=n(87462),r=n(45987),o=(n(74916),n(15306),n(67294)),l=n(71893),c=n(59978),i=n(39840),s=["rawTime","secs","long","nowrap"],u=l.default.div.withConfig({displayName:"timeCell__TimeBox",componentId:"sc-1k785pi-0"})(["display:flex;flex-direction:column;align-items:start;justify-content:center;"]);t.Z=function(e){var t=e.rawTime,n=e.secs,l=e.long,d=e.nowrap,m=void 0!==d&&d,g=(0,r.Z)(e,s),f=(0,i.e8)({rawTime:t,secs:n,long:l}),p=f.timeAgo,h=f.formattedDate,v=void 0===h?"":h;return o.createElement(u,g,o.createElement(c.TextSmall,null,p),o.createElement(c.TextMicro,(0,a.Z)({color:"textLite"},m&&{whiteSpace:"nowrap"}),v?null===v||void 0===v?void 0:v.replace(/ /g," - "):""))}},32071:function(e,t,n){n.d(t,{Z:function(){return z}});var a=n(67294),r=n(59978),o=n(12008),l=n(57387),c=n(71893),i=c.default.div.withConfig({displayName:"styled__StyledAlertTypeIndicator",componentId:"sc-19nk935-0"})(["width:",";height:",";border-radius:",";background-color:",";"],(0,r.getSizeBy)(1),(0,r.getSizeBy)(1),(0,r.getSizeBy)(1),(function(e){var t=e.critical,n=e.theme;return(0,r.getColor)(t?"error":["yellow","sunglow"])({theme:n})})),s=c.default.a.withConfig({displayName:"styled__StyledLink",componentId:"sc-19nk935-1"})(["padding:",";text-decoration:none;color:",";&:visited{color:",";}&:hover{text-decoration:none;}"],(function(e){var t=e.padding;return null!==t&&void 0!==t?t:"0"}),(0,r.getColor)("success"),(0,r.getColor)("success")),u=n(82351),d=function(e){var t=e.title,n=e.value,o=e.testId,c=e.status;return n?a.createElement(a.Fragment,null,a.createElement(r.Flex,{justifyContent:"between"},a.createElement(r.Flex,{gap:1,alignItems:"center"},a.createElement(i,{critical:"critical"===c}),a.createElement(r.H6,{color:"textDescription"},t)),a.createElement(r.Flex,{gap:1,alignItems:"center"},a.createElement(r.TextSmall,{color:"textDescription"},"More details about"," ",a.createElement(r.TextSmall,{strong:!0,color:"textDescription"},"$this")," ","command"),a.createElement(u.Z,{content:"The $this value comes from the DB Lookup or the Calculation above",isBasic:!0,plain:!0},a.createElement(r.Flex,{margin:[-.5,0,0]},a.createElement(r.Icon,{name:"informationPress",color:"textLite",width:"16px",height:"16px"}))))),a.createElement(l.ZP,{"data-testid":o},n)):null},m=(n(92222),n(91058),n(936)),g=n(61973),f=n(33511),p=function(e){if("string"===typeof e&&(e=parseInt(e,10)),0===e)return"now";var t=new Date;return e<0?(0,m.Z)((0,g.Z)(t,e),t,{addSuffix:!0}):(0,m.Z)((0,f.Z)(t,e),t,{addSuffix:!0})},h=function(e){var t=(0,o.E5)(e),n=t.instance,r=t.lookupAfter,l=t.lookupBefore,c=t.lookupDimensions,i=t.lookupMethod,s=t.lookupOptions;return(0,a.useMemo)((function(){return r?function(e){var t=e.lookupOptions,n=e.lookupDimensions,a=e.lookupMethod,r=e.lookupAfter,o=e.lookupBefore,l=e.instance,c="of all values";if(n){var i=n.split(","),s=i.length>1?"of the sum of dimensions":"of all values of dimension";c="".concat(s," ").concat(i.join(", "))}var u=t?", with options ".concat(t):"";return"".concat(a," ").concat(c," of chart ").concat(l,", starting ").concat(p(r+o)," and up to ").concat(p(o)).concat(u)}({lookupOptions:s,lookupDimensions:c,lookupMethod:i,lookupAfter:r,lookupBefore:l,instance:n}):""}),[r,n])},v=n(80854),E=function(e){var t=e.heading,n=e.value,o=e.testId;return n&&n.length?a.createElement(r.Flex,{column:!0,gap:3},t&&a.createElement(r.H6,{textTransform:"uppercase",color:"textDescription"},t),a.createElement(l.ZP,{"data-testid":o},n)):null},x=(0,a.memo)(E),w=n(25935),b=n(87462),y=function(e){var t=e.iconName,n=e.category,o=e.iconSize,l=void 0===o?"16px":o,c=e.value,i=e.testid;return c?a.createElement(r.Flex,{alignItems:"center",gap:1},a.createElement(r.Flex,{alignItems:"center",gap:1,basis:"100px"},a.createElement(r.Icon,(0,b.Z)({name:t,color:"textLite"},l&&{height:l,width:l})),a.createElement(r.TextSmall,{whiteSpace:"nowrap",color:"textDescription"},n,":")),a.createElement(r.TextSmall,{strong:!0,"data-testid":i},c)):null},S=function(e){var t=e.id,n=e.testid,l=(0,o.E5)(t),c=l.calculation,s=l.warning,u=l.critical,m=l.updateEvery,g=h(t),f=(0,a.useMemo)((function(){return(0,w.ZP)(c)}),[c]);return a.createElement(r.Flex,{column:!0,gap:4},a.createElement(v.Z,{iconName:"code"},"Configuration"),a.createElement(x,{heading:"DB lookup",value:g,testId:"".concat(n,"-lookup")}),a.createElement(x,{heading:"Calculation",value:f,testId:"".concat(n,"-calculation")}),a.createElement(r.H6,{textTransform:"uppercase",color:"textDescription"},"Severity Conditions"),a.createElement(r.Flex,{column:!0,gap:2},a.createElement(d,{title:"Warning when",value:s,testId:"".concat(n,"-warningWhen"),status:"warning"},a.createElement(i,{critical:!1})),a.createElement(d,{title:"Critical when",value:u,testId:"".concat(n,"-criticalWhen"),status:"critical"},a.createElement(i,{critical:!0}))),a.createElement(r.H6,{textTransform:"uppercase",color:"textDescription"},"Check"),a.createElement(y,{iconName:"clock_hollow",category:"Check every",value:"".concat(m," seconds"),testid:"".concat(n,"-checkEvery")}))},k=(0,a.memo)(S),Z=n(97945),I=n(80239),C=n(45987),T=n(20686),_=n(63860),N=n(50358),F=["isHighlighted","lastStatusChangeValue","lastStatusChange","units","status","nodeName"],D=function(e){var t=e.isHighlighted,n=e.lastStatusChangeValue,o=e.lastStatusChange,l=e.units,c=e.status,i=e.nodeName,s=(0,C.Z)(e,F);return a.createElement(r.Flex,(0,b.Z)({background:t&&"modalTabsBackground",border:{side:"all",color:"borderSecondary"},color:"textDescription",justifyContent:"between",padding:[4],round:!0},s),a.createElement(r.Flex,{column:!0,justifyContent:"between",gap:2},i&&a.createElement(r.Text,{strong:!0},i),a.createElement(_.Z,{rawTime:o,secs:!0,"data-testid":"nodeItem-lastStatusChange"})),a.createElement(r.Flex,{height:5,gap:2,alignItems:"center",alignSelf:"start"},a.createElement(u.Z,{content:"Triggered value",align:"bottom"},a.createElement(r.Box,null,a.createElement(N.Z,{loaded:!0,status:c,units:l,value:n,"data-testid":"nodeItem-alertValue"}))),a.createElement(T.Z,{border:void 0,type:c,icon:"alarm_bell",textSize:"small","data-testid":"alertView-alertPill-value"},c)))},A=function(e){var t=e.children;return a.createElement(r.Flex,{gap:2,column:!0},t)},z=function(e){var t=e.id,n=e.nodeName,l=e.testid,c=void 0===l?"alertDetailsModal":l,i=(0,o.E5)(t),u=i.class,d=i.instanceName,m=i.component,g=i.family,f=i.nodeId,p=i.type,h=i.lastStatusChangeValue,E=i.lastStatusChange,x=i.units,w=i.status,b=i.notificationType,S=(0,Z.iy)(f,"name");return a.createElement(r.Flex,{column:!0,gap:4},a.createElement(v.Z,{iconName:"information",margin:[0,0,0,-.5]},"Alert Info"),a.createElement(A,null,a.createElement(y,{iconName:"nodes_hollow",category:"Node",value:n||S,iconSize:"16px",testid:"".concat(c,"-hostname")}),a.createElement(y,{iconName:"charts_view",category:"Instance",value:d,testid:"".concat(c,"-chartId")}),a.createElement(y,{iconName:"data_retention",category:"Type",value:p,testid:"".concat(c,"-type")}),a.createElement(y,{iconName:"last_week",category:"Hostname"}),a.createElement(y,{iconName:"metrics",category:"Component",value:m,testid:"".concat(c,"-component")}),a.createElement(y,{iconName:"applications_hollow",category:"Family",value:g,testid:"".concat(c,"-family")}),a.createElement(y,{iconName:"networkingStack",category:"Class",value:u,testid:"".concat(c,"-class")}),a.createElement(y,{iconName:"incident_manager",category:"Event ID",testid:"".concat(c,"-eventId")})),a.createElement(k,{id:t,testid:c}),a.createElement(v.Z,{iconName:"nodes_hollow",iconSize:"20px"},"Instance Values - Node Instances"),a.createElement(r.Flex,{column:!0,gap:2},"agent"!==b&&a.createElement(r.Text,{color:"textDescription"},"A node may be claimed through multiple instances on the cloud (streaming through parent) and Netdata aggregates the alerts from all the instances and displays a single Active alert based on the highest severity, latest change."),a.createElement(D,{lastStatusChangeValue:h,lastStatusChange:E,units:x,status:w,nodeName:S,isHighlighted:!0})),a.createElement(v.Z,{iconName:"gear",iconSize:"20px"},"Edit Alert"),a.createElement(r.Text,{"data-testid":"".concat(c,"-edit-info")},"If you wish to edit and configure this alert, please:"),a.createElement(s,{href:I.UV,target:"_blank",padding:"0 4px 0 0","data-testid":"".concat(c,"-editAlertConfig-link"),"data-ga":"alert-modal::click-edit::alerts-view"},"Visit the documentation",a.createElement(r.Icon,{name:"arrow_left",rotate:2,size:"small",margin:[0,0,-.75,1],color:"success"})))}},50358:function(e,t,n){var a=n(87462),r=n(45987),o=(n(92222),n(67294)),l=n(59978),c=n(45771),i=["loaded","status","units","value","valueWithUnit"],s={critical:{background:"errorSemi",border:{side:"all",color:"error"},color:"error"},warning:{background:"warningSemi",border:{side:"all",color:"warning"},color:"warning"},cleared:{background:"successSemi",border:{side:"all",color:"success"},color:"success"},default:{background:"generic",border:{side:"all",color:"border"},color:"text"}};t.Z=function(e){var t=e.loaded,n=e.status,u=e.units,d=e.value,m=e.valueWithUnit,g=(0,r.Z)(e,i),f=s[n]||s.default,p=f.background,h=f.border,v=f.color,E=(0,o.useMemo)((function(){if(m)return m;if(void 0===d)return"-";var e=(0,c.J)(d);return"".concat(e," ").concat(u||"-")}),[d,m,u]);return o.createElement(l.Flex,(0,a.Z)({background:p,border:h,padding:[.5,2],round:9,width:{min:10},justifyContent:"center"},g),o.createElement(l.TextSmall,{color:v,strong:!0,whiteSpace:"nowrap",truncate:!0},t?E:"-"))}},12899:function(e,t,n){n.d(t,{R3:function(){return d},Nu:function(){return m},UD:function(){return u}});var a=n(4480),r=n(26398),o=n(74059),l=n(37518),c=(0,a.cn)({key:"assistantAlert",default:null}),i=(0,a.cn)({key:"assistantAlertsAtom",default:[]}),s=(0,a.CG)({key:"assistantSelector",get:function(e){var t=e.space,n=e.room,a=e.alarm,o=e.node,l=e.chart;return function(){return function(e){var t=e.space,n=e.room,a=e.alarm,o=e.node,l=e.chart;return r.Z.post("/api/v1/troubleshoot",{space:t,room:n,alarm:a,node:o,chart:l})}({space:t,room:n,alarm:a,node:o||"dummy-node-id",chart:l||"dummy-chart-id"})}},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),u=function(e){var t,n=e.alarm,r=e.node,c=e.chart,i=(0,o.th)(),u=(0,l.UL)(),d=(0,a.$P)(s({space:i,room:u,alarm:n,node:r,chart:c}));return{loaded:"loading"!==d.state,value:null===(t=d.contents)||void 0===t?void 0:t.data,hasError:"hasError"===d.state}},d=function(){return(0,a.FV)(c)},m=function(){return(0,a.FV)(i)}},22648:function(e,t,n){n.d(t,{m:function(){return r}});var a=n(94829),r=function(){return(0,a.Z)("(max-width: 767px)")}}}]);