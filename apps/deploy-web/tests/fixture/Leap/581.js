"use strict";(self.webpackChunk_leap_cosmos_extension=self.webpackChunk_leap_cosmos_extension||[]).push([[581],{990581:(G,C,o)=>{o.r(C),o.d(C,{default:()=>V});var c=o(964266),S=o(395516),T=o(896538),R=o(892742),y=o(94608),I=o(532833),k=o(701743),e=o(202784),f=o(410289),U=o(856514),m=o(744259);function V(){const E=(0,f.s0)(),p=(0,f.TH)().state,{validators:a,apy:d,mode:_,fromValidator:D,fromDelegation:M,unstakingPeriod:K,activeChain:l,activeNetwork:u}=p,{headerChainImgSrc:W}=(0,I.Cd)(),{allAssets:h}=(0,c.zSw)(l,u),[s]=(0,c.JsT)(l,u),O=(0,c.QSC)(l),[P,N]=(0,e.useState)(!1),[v,B]=(0,e.useState)("Random"),[w,A]=(0,e.useState)(!1),[r,x]=(0,e.useState)(""),[i,g]=(0,e.useState)(),z=(0,e.useMemo)(()=>{let t=h?.find(n=>n.symbol===s.coinDenom);return t||(t={amount:"0",symbol:s.coinDenom,usdValue:"0",coinMinimalDenom:s.coinMinimalDenom,img:O.chainSymbolImageUrl??""}),t},[O.chainSymbolImageUrl,s.coinDenom,s.coinMinimalDenom,h]);(0,e.useEffect)(()=>{a===void 0&&E("/stake",{replace:!0})},[a]);const Z=(0,e.useMemo)(()=>Object.values(a??{}).filter(t=>(_==="REDELEGATE"?t.address!==D:!0)&&!t.jailed&&t.status==="BOND_STATUS_BONDED"),[a]),L=(0,e.useMemo)(()=>Object.values(Z??{}).filter(t=>t.moniker.toLowerCase().includes(r.toLowerCase())||t.address===r),[r,v]);L.sort((t,n)=>{switch(v){case"Alphabetical":return(t?.moniker??t?.name??"z").trim().toLowerCase()>(n?.moniker??t?.name??"z").trim().toLowerCase()?1:-1;case"Amount staked":return+(t.tokens??"")<+(n.tokens??"")?1:-1;case"Commission":return(t.commission?.commission_rates.rate??"")<(n.commission?.commission_rates.rate??"")?1:-1;case"APY":return d[t.address]<d[n.address]?1:-1;case"Random":return 0}});const j=(0,e.useCallback)(()=>{i?g(void 0):E(-1)},[E,i]);return e.createElement("div",{className:"relative w-[400px] overflow-clip"},e.createElement(k.ZP,{isShown:P,toggler:()=>N(!P)}),e.createElement(R.Z,{header:e.createElement(T.m,{title:e.createElement(e.Fragment,null,e.createElement(y.Z,{size:"lg",className:"font-bold"},_==="REDELEGATE"?"Switch Validator":`Stake ${s.coinDenom}`)),imgSrc:W,action:{onClick:j,type:U.Y.BACK}})},e.createElement("div",{className:"flex flex-col p-7 overflow-scroll"},!i&&a&&e.createElement(m.Ec,{validators:L,apys:d,searchfilter:r,delegation:M,fromValidator:a[D],onClickSortBy:()=>A(!0),onShuffle:()=>B("Random"),setSearchfilter:x,setSelectedValidator:g,activeStakingCoinDenom:s.coinDenom}),i&&a&&e.createElement(m._0,{mode:_,fromValidator:a[D],delegation:M,toValidator:i,unstakingPeriod:K,activeChain:l,token:z,activeNetwork:u}))),e.createElement(m.av,{activeChain:l,isVisible:w,setVisible:A,setSortBy:B,sortBy:v}),e.createElement(S.Z,{label:S.W.Stake}))}}}]);