/*! For license information please see stories-TableComponent-TableComponent-stories.335e42e6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkacc_st=self.webpackChunkacc_st||[]).push([[242],{"./src/stories/TableComponent/TableComponent.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GridMode:()=>GridMode,Primary:()=>Primary,ZebraMode:()=>ZebraMode,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TableComponent_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TableComponent_TableComponent=_ref=>{let{backgroundColor,size,zebra,grids}=_ref;const ZebraMode=zebra?"zebra":"",GridsMode=grids?"grids":"",[data,setData]=(0,react.useState)([]),[filteredData,setFilteredData]=(0,react.useState)([]),[expandedRows,setExpandedRows]=(0,react.useState)({}),[filters,setFilters]=(0,react.useState)({title:"",body:"",id:""});(0,react.useEffect)((()=>{fetch("https://jsonplaceholder.typicode.com/posts").then((response=>response.json())).then((api=>{setData(api),setFilteredData(api)}))}),[]);const handleFilter=(e,column)=>{const searchTerm=e.target.value.toLowerCase();setFilters({...filters,[column]:searchTerm})};(0,react.useEffect)((()=>{const filtered=data.filter((item=>Object.keys(filters).every((column=>"title"===column&&"string"==typeof item[column]||"body"===column&&"string"==typeof item[column]?item[column].toLowerCase().includes(filters[column]):"id"!==column||"number"!=typeof item[column]||String(item[column]).includes(filters[column])))));setFilteredData(filtered)}),[data,filters]);const toggleAccordion=index=>{setExpandedRows((prevState=>{const isRowExpanded=prevState[index];return{...prevState,[index]:!isRowExpanded}}))};return(0,jsx_runtime.jsxs)("div",{className:"container",children:[(0,jsx_runtime.jsxs)("div",{className:"filter__container",children:[(0,jsx_runtime.jsx)("input",{type:"text",value:filters.id,onChange:e=>handleFilter(e,"id"),placeholder:"Фильтр ID"}),(0,jsx_runtime.jsx)("input",{type:"text",value:filters.title,onChange:e=>handleFilter(e,"title"),placeholder:"Фильтр Title"}),(0,jsx_runtime.jsx)("input",{type:"text",value:filters.body,onChange:e=>handleFilter(e,"body"),placeholder:"Фильтр Body"})]}),(0,jsx_runtime.jsxs)("table",{className:["data__table","data__table--".concat(size),"body__table--".concat(ZebraMode),"body__table--".concat(GridsMode)].join(" "),children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsx)("tr",{className:"table__header",style:backgroundColor&&{backgroundColor},children:data.length>0&&Object.keys(data[0]).map((key=>"userId"!==key&&(0,jsx_runtime.jsx)("th",{className:"table-header-column",children:"id"!==key?(0,jsx_runtime.jsx)("div",{children:key}):"ID"},key)))})}),(0,jsx_runtime.jsx)("tbody",{children:filteredData.map(((item,index)=>(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:item.id}),(0,jsx_runtime.jsx)("td",{children:item.title.length>30?(0,jsx_runtime.jsx)("span",{onClick:()=>toggleAccordion(index),children:expandedRows[index]?item.title:"".concat(item.title.substring(0,40),"...")}):item.title}),(0,jsx_runtime.jsx)("td",{children:item.body.length>30?(0,jsx_runtime.jsx)("span",{onClick:()=>toggleAccordion(index),children:expandedRows[index]?item.body:"".concat(item.body.substring(0,40),"...")}):item.body})]},item.id)))})]})]})};TableComponent_TableComponent.defaultProps={backgroundColor:null,size:"medium",zebra:!1,grids:!1},TableComponent_TableComponent.__docgenInfo={description:"",methods:[],displayName:"TableComponent",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What header background color to use",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the font be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},zebra:{defaultValue:{value:"false",computed:!1},description:"Use zebra design for lines?",type:{name:"bool"},required:!1},grids:{defaultValue:{value:"false",computed:!1},description:"Use grid design for lines?",type:{name:"bool"},required:!1}}};var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_ZebraMode$parameters,_ZebraMode$parameters2,_ZebraMode$parameters3,_GridMode$parameters,_GridMode$parameters2,_GridMode$parameters3;const TableComponent_stories={title:"UI/TableComponent",component:TableComponent_TableComponent,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},Primary={args:{zebra:!1}},ZebraMode={args:{zebra:!0,grids:!1}},GridMode={args:{zebra:!1,grids:!0}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs,source:{originalSource:"{\n  args: {\n    zebra: false\n  }\n}",...null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source}}},ZebraMode.parameters={...ZebraMode.parameters,docs:{...null===(_ZebraMode$parameters=ZebraMode.parameters)||void 0===_ZebraMode$parameters?void 0:_ZebraMode$parameters.docs,source:{originalSource:"{\n  args: {\n    zebra: true,\n    grids: false\n  }\n}",...null===(_ZebraMode$parameters2=ZebraMode.parameters)||void 0===_ZebraMode$parameters2||null===(_ZebraMode$parameters3=_ZebraMode$parameters2.docs)||void 0===_ZebraMode$parameters3?void 0:_ZebraMode$parameters3.source}}},GridMode.parameters={...GridMode.parameters,docs:{...null===(_GridMode$parameters=GridMode.parameters)||void 0===_GridMode$parameters?void 0:_GridMode$parameters.docs,source:{originalSource:"{\n  args: {\n    zebra: false,\n    grids: true\n  }\n}",...null===(_GridMode$parameters2=GridMode.parameters)||void 0===_GridMode$parameters2||null===(_GridMode$parameters3=_GridMode$parameters2.docs)||void 0===_GridMode$parameters3?void 0:_GridMode$parameters3.source}}};const __namedExportsOrder=["Primary","ZebraMode","GridMode"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);