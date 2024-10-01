var shellPerformance=window.performance,HighResolutionTimingSupported=!!shellPerformance&&"function"==typeof shellPerformance.mark;HighResolutionTimingSupported&&shellPerformance.mark("shell_umc_mecontrol_start"),(self["suiteux_shell_webpackJsonp_suiteux-main"]=self["suiteux_shell_webpackJsonp_suiteux-main"]||[]).push([["umc_mecontrol"],{50641:function(t,e,n){n.r(e),n.d(e,{UniversalMeControlConnector:function(){return M}});var o=n(22672),i=n(93814),r=n(87948),s=n(95422),a=n(83779);var l=n(90872),p=n(16968),h=n(47710);const d=5,u=500,c=1.5;function g(t,e,n,o){let i=document.createElement("script");if(i.src=window.O365ShellContext.TrustedTypesPolicies[h.TR].createScriptURL(t),i.crossOrigin="anonymous",i.async=!0,null!=e){i.onload=i=>{if(o){let r=Date.now()+200,s=()=>{o()?e(i):Date.now()>r?n({ResourceName:t,Details:12}):setTimeout((()=>{s()}),50)};s()}else e(i)},null!=n&&(i.onerror=(e,o,i,r,s)=>{n(function(t,e,n,o,i,r){let s;s="string"==typeof e?e:e.type;return{ResourceName:t,Details:`Script load error occurred.  Event: ${s}, Details: source: ${n}, fileno: ${o}, col: ${i}, error: ${r?JSON.stringify(r):"none"}`}}(t,e,o,i,r,s))});let r=document.head||document.getElementsByTagName("head")[0];if(!r&&n){let e="";if(window.performance){let t=window.performance.getEntriesByName("shell_bootstrapper_start");t&&t[0]&&(e=`Start Time: ${t[0].startTime}, Now: ${window.performance.now()}, `)}n({ResourceName:t,Details:`Failed to find head tag.  Page: ${window.location.origin}${window.location.pathname}, ${e}Agent: ${navigator.userAgent} `})}else r.appendChild(i)}}function m(t,e,n=d,o=u,i=c,r,s,a){e(t,(e=>{n!==d&&(0,p.tZ)().tag("ShellPackage_RetrySuccessful",1,d-n,t),r&&r(e)}),(l=>{0===n?s&&s(l):setTimeout((()=>{m(t,e,n-1,o*i,i,r,s,a)}),o)}),a)}var C=n(5232),A=n(49985),S=n(33680),U=n(20748),f=n(50585);let I=!1;class P extends l.Component{constructor(t){super(t),this.UniversalMeControlClickHandler=()=>{this.state.isUMCExpanded?(0,p.tZ)().click("MeControl","NavBar","UMCOpen"):(0,p.tZ)().click("MeControl","NavBar","UMCClose")},this.meControlClickHandler=t=>{if(!1===this.state.isUMCLoadingStarted){this.setState({isUMCLoadingStarted:!0});const e=t.keyCode;if(e&&13!==e&&32!==e)return;t.preventDefault(),this.setState({meControlButtonClickedTime:Date.now()}),this.props.isConsumer||(0,p.NP)().subscribe("SuiteAPILoaded",(t=>{!t.Configuration.IsPwa&&t.Configuration.UserHasExchangeLicense&&t.Configuration.ExchangeDataOpxEnabled&&t.User.getOwaUserConfiguration().then((t=>{this.props.updatePhotoPolicies(t.SegmentationSettings.SetPhoto)})).catch((()=>{}))}),!0);const n=this.createMeControlConfig();window.MeControl.Loader.loadAsync(n).then((()=>{this.onLoadConfigurationSuccess(),(0,S.Wg)(C.kT,"click keydown",this.meControlClickHandler)})).catch((t=>{(0,p.tZ)().exception("UMC_Load_Configuration_Failed",6,t),(0,f.Tg)(!0)}))}},this.onMeControlScriptDownLoadSuccessful=()=>{window.MeControl&&((0,S.lQ)(C.kT,"click keydown",this.meControlClickHandler),(0,S.lQ)(C.zA,"click keydown",this.UniversalMeControlClickHandler))},this.onLoadConfigurationSuccess=()=>{this.props.onMeControlAPIInitialized(!0);const t=(0,p.NP)();if(window.MeControl.API&&this.props.pictureUrl||((0,f.d)(),t.invoke("UniversalMeControlInitialized")),window.MeControl.API){if(this.props.presenceStatus&&this.props.userPresenceStatusItems){const t=this.createPresenceConfig(this.props.userPresenceStatusItems,this.props.presenceStatus);this.loadPresenceConfig(t)}if(this.props.pictureUrl)try{window.MeControl.API.setAccountPicture(this.props.pictureUrl),window.MeControl.API.addEventListener("pictureupdated",this.onPictureupdated)}catch(t){(0,p.tZ)().exception("UMC_API_setAccountPicture_Failed",6,t),this.onPictureupdated()}window.MeControl.API.addEventListener("controlexpanded",this.onMeControlExpanded),window.MeControl.API.addEventListener("controlcollapsed",this.onMeControlCollapsed),window.MeControl.API.addEventListener("presenceupdated",this.onPresenceStatusChanged),window.MeControl.API.addEventListener("commandclick",this.onCommandClick),window.MeControl.API.addEventListener("photochangeclick",this.onPhotoChangeClick),t.subscribe("ThemeChanged",this.onThemeChanged,!0),window.MeControl.API.addEventListener("beforeswitch",this.onSwitch),window.MeControl.API.addEventListener("beforeswitchto",this.onSwitchTo),window.MeControl.API.addEventListener("beforesignoutfromapp",this.onSignOutClick),window.MeControl.API.addEventListener("beforesignoutfromidp",this.onSignOutFromIDP),window.MeControl.API.addEventListener("beforesignoutandforgetfromidp",this.onSignOutAndForgetFromIDP),window.MeControl.API.addEventListener("aftergetrememberedaccounts",this.onGetRememberedAccountsCall)}},this.isBasicAuthInfoValid=()=>!(!this.props.shellAuthProviderConfig||!this.props.shellAuthProviderConfig.type)||((0,p.tZ)().exception("UMC_Invalid_Basic_AuthConfig",6,null),!1),this.isAADAuthInfoValid=t=>!!t&&(!(!t.appId||!t.wreply)||(!!(t.signOutUrl&&t.signOutAndForgetUrl&&t.rememberedAccountsUrl&&t.forgetUrl)||((0,p.tZ)().exception("UMC_Invalid_AAD_AuthConfig",6,null),!1))),this.isAADAuthInfoValidForAadProxyConfig=t=>!!t&&(!(!t.appId||!t.wreply)||(!!(t.signOutUrl&&t.signOutAndForgetUrl&&t.forgetUrl)||((0,p.tZ)().exception("UMC_Invalid_AAD_Proxy_AuthConfig",6,null),!1))),this.isMSAAuthInfoValid=t=>!!t&&(!(!t.siteId||!t.wreply)||(!(!t.signOutAndForgetUrl||!t.rememberedAccountsUrl)||((0,p.tZ)().exception("UMC_Invalid_MSA_AuthConfig",6,null),!1))),this.getAADAuthConfigComponent=t=>{const e=encodeURIComponent(t.wreply),n=encodeURIComponent(t.appId);return{signOutUrl:t.signOutUrl||(0,r.JT)(this.props.aadSignOutUrl,e,n),signOutAndForgetUrl:t.signOutAndForgetUrl||(0,r.JT)(this.props.aadSignOutAndForgetUrl,e,n),rememberedAccountsUrl:t.rememberedAccountsUrl||(0,r.JT)(this.props.aadRememberedAccountsUrl,e,n),forgetUrl:t.forgetUrl||this.props.aadForgetUrl}},this.getMSAAuthConfigComponent=t=>{const e=encodeURIComponent(t.siteId),n=encodeURIComponent(t.wreply),o=encodeURIComponent(this.props.cultureName);return{signOutAndForgetUrl:t.signOutAndForgetUrl||(0,r.JT)(this.props.msaSignOutAndForgetUrl,e,n,o),rememberedAccountsUrl:t.rememberedAccountsUrl||(0,r.JT)(this.props.msaRememberedAccountsUrl,e,n,o)}},this.getAADComponentForMsaWithAadProxyConfig=t=>{const e=encodeURIComponent(t.wreply),n=encodeURIComponent(t.appId);return{signOutUrl:t.signOutUrl||(0,r.JT)(this.props.aadSignOutUrl,e,n),signOutAndForgetUrl:t.signOutAndForgetUrl||(0,r.JT)(this.props.aadSignOutAndForgetUrl,e,n),rememberedAccountsUrl:void 0,forgetUrl:t.forgetUrl||this.props.aadForgetUrl}},this.getMSAComponentForAadWithMsaProxyConfig=t=>{const e=encodeURIComponent(t.siteId),n=encodeURIComponent(t.wreply),o=encodeURIComponent(this.props.cultureName);return{signOutAndForgetUrl:t.signOutAndForgetUrl||(0,r.JT)(this.props.msaSignOutAndForgetUrl,e,n,o),rememberedAccountsUrl:void 0}},this.getDefaultMeControlAuthConfig=()=>({type:this.props.authProviderConfigType,appSignOutUrl:this.props.signoutLink.Url||this.props.defaultSignOutUrl}),this.getDualStackAuthConfig=()=>{const t=this.props.shellAuthProviderConfig;return this.isAADAuthInfoValid(t.aad)&&this.isMSAAuthInfoValid(t.msa)?{type:t.type,appSignInUrl:t.appSignInUrl,appSignInToUrl:t.appSignInToUrl||t.appSignInUrl,appSignOutUrl:t.appSignOutUrl||this.props.signoutLink.Url||this.props.defaultSignOutUrl,appSwitchUrl:t.appSwitchUrl||t.appSignInUrl,appSwitchToUrl:t.appSwitchToUrl||t.appSignInUrl,aad:this.getAADAuthConfigComponent(t.aad),msa:this.getMSAAuthConfigComponent(t.msa)}:this.getDefaultMeControlAuthConfig()},this.getAadBasedAuthConfig=()=>{let t;return t=(this.props.shellAuthProviderConfig.type,this.props.shellAuthProviderConfig),this.isAADAuthInfoValid(t.aad)?{type:t.type,appSignInUrl:t.appSignInUrl,appSignInToUrl:t.appSignInToUrl||t.appSignInUrl,appSignOutUrl:t.appSignOutUrl||this.props.signoutLink.Url||this.props.defaultSignOutUrl,appSwitchUrl:t.appSwitchUrl||t.appSignInUrl,appSwitchToUrl:t.appSwitchToUrl||t.appSignInUrl,aad:this.getAADAuthConfigComponent(t.aad)}:this.getDefaultMeControlAuthConfig()},this.getMsaOnlyAuthConfig=()=>{const t=this.props.shellAuthProviderConfig;return this.isMSAAuthInfoValid(t.msa)?{type:t.type,appSignInUrl:t.appSignInUrl,appSignInToUrl:t.appSignInToUrl||t.appSignInUrl,appSignOutUrl:t.appSignOutUrl||this.props.signoutLink.Url||this.props.defaultSignOutUrl,appSwitchUrl:t.appSwitchUrl||t.appSignInUrl,appSwitchToUrl:t.appSwitchToUrl||t.appSignInUrl,msa:this.getMSAAuthConfigComponent(t.msa)}:this.getDefaultMeControlAuthConfig()},this.getAadWithMsaProxyConfig=()=>{const t=this.props.shellAuthProviderConfig;return this.isAADAuthInfoValid(t.aad)?{type:t.type,appSignInUrl:t.appSignInUrl,appSignInToUrl:t.appSignInToUrl||t.appSignInUrl,appSignOutUrl:t.appSignOutUrl||this.props.signoutLink.Url||this.props.defaultSignOutUrl,appSwitchUrl:t.appSwitchUrl||t.appSignInUrl,appSwitchToUrl:t.appSwitchToUrl||t.appSignInUrl,aad:this.getAADAuthConfigComponent(t.aad),msa:this.getMSAComponentForAadWithMsaProxyConfig(t.msa)}:this.getDefaultMeControlAuthConfig()},this.getMsaWithAadProxyConfig=()=>{const t=this.props.shellAuthProviderConfig;return this.isAADAuthInfoValidForAadProxyConfig(t.aad)&&this.isMSAAuthInfoValid(t.msa)?{type:t.type,appSignInUrl:t.appSignInUrl,appSignInToUrl:t.appSignInToUrl||t.appSignInUrl,appSignOutUrl:t.appSignOutUrl||this.props.signoutLink.Url||this.props.defaultSignOutUrl,appSwitchUrl:t.appSwitchUrl||t.appSignInUrl,appSwitchToUrl:t.appSwitchToUrl||t.appSignInUrl,aad:this.getAADComponentForMsaWithAadProxyConfig(t.aad),msa:this.getMSAAuthConfigComponent(t.msa)}:this.getDefaultMeControlAuthConfig()},this.getCustomAuthConfig=()=>{const t=this.props.shellAuthProviderConfig;return{type:t.type,signInExperienceTypes:t.signInExperienceTypes|(this.props.isConsumer?2:4),signIn:t.signIn,signInTo:t.signInTo,signOutFromApp:t.signOutFromApp,signOutFromIdp:t.signOutFromIdp,signOutAndForgetFromIdp:t.signOutAndForgetFromIdp,switch:t.switch,switchTo:t.switchTo,getRememberedAccounts:t.getRememberedAccounts}},this.getAdalJsAuthConfig=()=>{const t=this.props.shellAuthProviderConfig;return{type:t.type,signIn:t.signIn,signInTo:t.signInTo,signOutFromApp:t.signOutFromApp,switch:t.switch,switchTo:t.switchTo,aad:this.getAADAuthConfigComponent(t.aad)}},this.getMsalJsAuthConfig=()=>{const t=this.props.shellAuthProviderConfig;return{type:t.type,signIn:t.signIn,signInTo:t.signInTo,signOutFromApp:t.signOutFromApp,switch:t.switch,switchTo:t.switchTo,aad:this.getAADAuthConfigComponent(t.aad)}},this.getAccountSwitchingAuthConfig=()=>{if(!this.isBasicAuthInfoValid())return this.getDefaultMeControlAuthConfig();switch(this.props.shellAuthProviderConfig.type){case"webDualStack":return this.getDualStackAuthConfig();case"webAadWithMsaFed":case"webAadOnly":return this.getAadBasedAuthConfig();case"webMsaOnly":return this.getMsaOnlyAuthConfig();case"webAadWithMsaProxy":return this.getAadWithMsaProxyConfig();case"webMsaWithAadProxy":return this.getMsaWithAadProxyConfig();case"partnerManaged":return this.getCustomAuthConfig();case"adalJsAadOnly":case"adalJsWithMsaFed":return this.getAdalJsAuthConfig();case"msalJsAadOnly":case"msalJsWithMsa":return this.getMsalJsAuthConfig();default:return this.getDefaultMeControlAuthConfig()}},this.createMeControlConfig=()=>{const t={commands:this.getMeControlLinks()},e=this.props.firstName&&this.props.lastName?(0,a.I)(this.props.firstName.concat(" ",this.props.lastName),this.props.isRtl):(0,a.I)(this.props.userDisplayName,this.props.isRtl),n={type:this.props.isConsumer?"msa":"aad",authenticatedState:this.props.authenticatedState,memberName:this.props.upn,displayName:this.props.userDisplayName,pictureUrl:"",editPictureUrl:this.props.editPictureUrl,orgName:this.props.companyDisplayName,initials:e,tenantId:this.props.tenantId,login_hint:this.props.shellAuthProviderConfig?this.props.shellAuthProviderConfig.login_Hint:void 0};let o;o=this.props.accountSwitchingEnabled?this.getAccountSwitchingAuthConfig():this.getDefaultMeControlAuthConfig();const i={displayModes:this.props.showDisplayName?void 0:[{type:"compressed",widthBreakpoint:Number.MAX_VALUE}],headerTheme:{type:this.props.isDarkMode?"dark":this.getHeaderTheme(this.props.themeDefaultTextColor)},theme:{type:this.props.isDarkMode?"dark":"light"},defaultExpanded:!0};return{apiGeneration:"GEN2",containerId:C.zA,authProviderConfig:o,currentAccount:n,appContextConfig:t,primaryUXConfig:i}},this.createPresenceConfig=(t,e)=>({presenceList:t.map((t=>({key:t.key,presenceString:t.description,imageUrl:t.url}))),currentPresence:{key:e.key,presenceString:e.description,imageUrl:e.url}}),this.onMeControlExpanded=()=>{if(this.setState({isUMCExpanded:!0}),!this.state.isRoleAttributeAddedToEditPicture){const t=document.getElementById(C.yd);t&&(t.role="button"),this.setState({isRoleAttributeAddedToEditPicture:!0})}(0,p.tZ)().impression("MeControlOpen","UMC"),!1===this.state.isMeControlPaneOpened&&((0,p.tZ)().timer("UMC_PaneOpened",Date.now()-this.state.meControlButtonClickedTime),this.setState({isMeControlPaneOpened:!0})),this.props.onMeControlExpanded(C.zA)},this.onMeControlCollapsed=()=>{this.setState({isUMCExpanded:!1}),(0,p.tZ)().impression("MeControlClose","UMC")},this.onPresenceStatusChanged=t=>{t&&t.detail&&t.detail.key?(0,p.NP)().invoke("PresenceStatusChanged",t.detail.key):(0,p.tZ)().exception("UMC_PresenceStatus_Has_Invalid_key",6,null)},this.onMeControlScriptDownLoadFailed=()=>{(0,p.tZ)().exception("UMC_Script_Download_Failed",6,null),(0,f.Tg)(!1)},this.loadPresenceConfig=t=>{try{window.MeControl&&window.MeControl.API&&(window.MeControl.API.loadPresenceConfig(t),this.setState({isPresenceLoaded:!0}))}catch(t){(0,p.tZ)().exception("UMC_API_LoadPresenceConfig_Failed",6,t)}},this.onCommandClick=t=>{(0,p.tZ)().click("UMC_"+t.detail.commandId,"UniversalMeControlPane");const e=this.getMeLinksAsNavBarLinkDataArray().filter((e=>e.Id===t.detail.commandId&&void 0!==e.Action));e[0]&&e[0].Action()},this.onSignOutClick=t=>{(0,p.tZ)().click("SignOut","UniversalMeControlPane"),null!=this.props.signoutLink.Action&&this.props.signoutLink.Action();const e={triggerEvent:t};(0,p.NP)().invoke("SignOut",e)},this.onThemeChanged=t=>{const e={type:t.IsDarkMode?"dark":"light"},n={type:t.IsDarkMode?"dark":this.getHeaderTheme(t.DefaultText)};window.MeControl.API.setTheme(e),window.MeControl.API.setHeaderTheme(n)},this.onPhotoChangeClick=t=>{!1===this.props.isConsumer?((0,p.tZ)().click("EditPhoto","UniversalMeControlPane"),this.props.setChangePhoto(!0),t.preventDefault()):(0,p.tZ)().click("EditPhoto","UniversalMeControlPane")},this.onSwitch=t=>{(0,p.tZ)().click("Switch","UniversalMeControlPane"),this.invokeAccountSwitchEvent(),(0,p.NP)().invoke("SwitchInitiated",t)},this.onSwitchTo=t=>{var e,n,o,i;(0,p.tZ)().click("SwitchTo","UniversalMeControlPane",null,null,(null===(n=null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.currentAccount)||void 0===n?void 0:n.type.toString())+"To"+(null===(i=null===(o=null==t?void 0:t.detail)||void 0===o?void 0:o.nextAccount)||void 0===i?void 0:i.type.toString())),this.invokeAccountSwitchEvent(),(0,p.NP)().invoke("SwitchToInitiated",t)},this.onSignOutFromIDP=t=>{(0,p.tZ)().click("SignOutFromIDP","UniversalMeControlPane"),(0,p.NP)().invoke("SignOutFromIDPInitiated",t)},this.onSignOutAndForgetFromIDP=t=>{(0,p.tZ)().click("SignOutAndForget","UniversalMeControlPane"),(0,p.NP)().invoke("SignOutAndForgetFromIDPInitiated",t)},this.onGetRememberedAccountsCall=t=>{(0,p.tZ)().click("RememberedAccounts","UniversalMeControlPane",null,null,t.detail.rememberedAccounts.length.toString())},this.getHeaderTheme=t=>"#FFFFFF"===t.toUpperCase()||"#FFF"===t.toUpperCase()?"dark":"light",this.onPictureupdated=()=>{(0,f.d)();(0,p.NP)().invoke("UniversalMeControlInitialized"),window.MeControl.API.removeEventListener("pictureupdated",this.onPictureupdated)},this.invokeAccountSwitchEvent=()=>{(0,U.f)().then((()=>{})).catch((t=>{(0,p.tZ)().exception("UMC_Switch_ClearSessionStorage_Failed",6,t)}));const t={isMSAAccount:this.props.isConsumer,puid:this.props.puid,upn:this.props.upn};(0,p.NP)().invoke("AccountSwitchInitiated",t)},this.state={isPresenceLoaded:!1,meControlButtonClickedTime:void 0,isMeControlPaneOpened:!1,isUMCLoadingStarted:!1,isUMCExpanded:!1,isRoleAttributeAddedToEditPicture:!1}}render(){return this.props.enableChangePhoto&&l.createElement(A.D,{upn:this.props.upn,userDisplayName:this.props.userDisplayName,editPhotoPopupUrl:this.props.editPhotoPopupUrl,refreshPhoto:this.props.refreshPhoto,setChangePhoto:this.props.setChangePhoto})}componentDidMount(){this.props.isUniversalMeControlEnabled&&!1===I&&(I=!0,this.downLoadMeControlScript())}componentDidUpdate(t){if(this.props.isMeControlAPIInitialized){if(this.props.pictureUrl&&this.props.pictureUrl!==t.pictureUrl)try{window.MeControl.API.setAccountPicture(this.props.pictureUrl)}catch(t){(0,p.tZ)().exception("UMC_API_setAccountPicture_Failed",6,t)}if(this.props.editPictureUrl&&this.props.editPictureUrl!==t.editPictureUrl){const t={type:this.props.isConsumer?"msa":"aad",authenticatedState:this.props.authenticatedState,memberName:this.props.upn,displayName:this.props.userDisplayName,pictureUrl:this.props.pictureUrl,editPictureUrl:this.props.editPictureUrl,orgName:this.props.companyDisplayName,initials:this.props.firstName&&this.props.lastName?(0,a.I)(this.props.firstName.concat(" ",this.props.lastName),this.props.isRtl):(0,a.I)(this.props.userDisplayName,this.props.isRtl)};window.MeControl.API.setActiveAccount(t)}if(this.props.aboutMeLink&&this.props.aboutMeLink!==t.aboutMeLink){const t=this.getMeControlLinks();window.MeControl.API.setCommands(t)}if(this.props.presenceStatus&&this.props.userPresenceStatusItems){if(!this.state.isPresenceLoaded||!t.userPresenceStatusItems||this.props.userPresenceStatusItems.length!==t.userPresenceStatusItems.length||JSON.stringify(this.props.userPresenceStatusItems)!==JSON.stringify(t.userPresenceStatusItems)){const t=this.createPresenceConfig(this.props.userPresenceStatusItems,this.props.presenceStatus);this.loadPresenceConfig(t)}if(t.presenceStatus!==this.props.presenceStatus){const t={key:this.props.presenceStatus.key,presenceString:this.props.presenceStatus.description,imageUrl:this.props.presenceStatus.url};try{window.MeControl.API.setPresence(t)}catch(t){(0,p.tZ)().exception("UMC_API_SetPresence_Failed",6,t)}}}}}componentWillUnmount(){window.MeControl&&window.MeControl.API&&(window.MeControl.API.removeEventListener("controlexpanded",this.onMeControlExpanded),window.MeControl.API.removeEventListener("controlcollapsed",this.onMeControlCollapsed),window.MeControl.API.removeEventListener("presenceupdated",this.onPresenceStatusChanged),window.MeControl.API.removeEventListener("commandclick",this.onCommandClick),window.MeControl.API.removeEventListener("photochangeclick",this.onPhotoChangeClick),(0,p.NP)().unsubscribe("ThemeChanged",this.onThemeChanged),window.MeControl.API.removeEventListener("beforeswitch",this.onSwitch),window.MeControl.API.removeEventListener("beforeswitchto",this.onSwitchTo),window.MeControl.API.removeEventListener("beforesignoutfromapp",this.onSignOutClick),window.MeControl.API.removeEventListener("beforesignoutfromidp",this.onSignOutFromIDP),window.MeControl.API.removeEventListener("beforesignoutandforgetfromidp",this.onSignOutAndForgetFromIDP))}downLoadMeControlScript(){const t=function(t){void 0===t&&(t={});var e=[];t.partner&&e.push("partner="+t.partner),t.version&&e.push("version="+t.version),t.market&&e.push("market="+t.market),t.debug&&e.push("debug=true"),t.wrapperId&&e.push("wrapperId="+t.wrapperId);var n=e.join("&");return"https://amcdn.msftauth.net/me"+(n?"?"+n:"")}({partner:this.props.workLoadId,market:this.props.cultureName,version:"latest",wrapperId:"suiteshell"});var e,n,o,i;window.O365ShellContext.TrustedResources.add(t),t?(e=t,n=this.onMeControlScriptDownLoadSuccessful,o=this.onMeControlScriptDownLoadFailed,m(e,g,d,u,c,n,o,i)):((0,p.tZ)().exception("UMC_GetEndpointUrl_Failed",6,null),(0,f.Tg)(!1))}getMeControlLinks(){return this.getMeLinksAsNavBarLinkDataArray().map((t=>({type:"link",text:t.Text,id:t.Id,ariaLabel:t.Title,openInNewTab:"_blank"===t.TargetWindow,url:t.Url,Onclick:t.Action})))}getMeLinksAsNavBarLinkDataArray(){let t=[];return t=t.concat(this.props.aboutMeLink||[],...this.props.customMenuItems||[]),this.props.promoteMeCustomLink&&t.length>1&&([t[0],t[1]]=[t[1],t[0]]),t}}var w=n(10682);const M=(0,o.connect)((t=>{const e=t.meControlState;return{isConsumer:t.userState.isConsumer,upn:t.userState.upn,puid:t.userState.puid,tenantId:t.shellInitDataState.clientData.TID,isRtl:null!=t.userState&&t.userState.isRtl,workLoadId:t.shellInitDataState.clientData.WorkloadId,cultureName:t.userState.cultureName,userDisplayName:e.displayName,firstName:e.firstName,lastName:e.lastName,showDisplayName:e.showDisplayName,pictureUrl:e.photoUrl,editPictureUrl:!t.userState.isConsumer&&e.canSetPhoto?(0,r.JT)("https://portal.office.com/account?username={0}&ref=MeControl#personalinfo",encodeURIComponent(t.userState.upn)):void 0,companyDisplayName:t.shellInitDataState.navBarData.CompanyDisplayName,authProviderConfigType:"webDualStack",authenticatedState:"signedIn",aboutMeLink:e.aboutMeLink,signoutLink:e.signoutLink,defaultSignOutUrl:e.defaultSignOutUrl,customMenuItems:e.customMenuItems,presenceStatus:e.userPresenceStatus,userPresenceStatusItems:e.userPresenceStatusItems,isDarkMode:t.themeState.IsDarkMode,themeDefaultTextColor:t.themeState.DefaultText,isUniversalMeControlEnabled:e.universalMeControlEnabled,accountSwitchingEnabled:e.accountSwitchingEnabled,npmMeControlEnabled:e.npmMeControlEnabled,isMeControlAPIInitialized:e.isUniversalMeControAPIInitialized,editPhotoPopupUrl:e.editPhotoPopupUrl,enableChangePhoto:e.enableChangePhoto,promoteMeCustomLink:e.promoteMeCustomLink,shellAuthProviderConfig:e.shellAuthProviderConfig,aadSignOutUrl:e.aadSignOutUrl,aadSignOutAndForgetUrl:e.aadSignOutAndForgetUrl,aadForgetUrl:e.aadForgetUrl,aadRememberedAccountsUrl:e.aadRememberedAccountsUrl,msaSignOutAndForgetUrl:e.msaSignOutAndForgetUrl,msaRememberedAccountsUrl:e.msaRememberedAccountsUrl,headerLinkText:t.shellInitDataState.clientData.AppHeaderLinkText}}),(t=>({onMeControlAPIInitialized:e=>{t((0,w.jX)(e))},onMeControlExpanded:e=>{t((0,i.ad)(e)),t((0,s.IZ)(null))},setChangePhoto:e=>{t((0,w.tG)(e))},refreshPhoto:(e,n)=>{t((0,w.yO)(e,n))},unregisterProvider:e=>{t((0,s.Ig)(e))},updatePhotoPolicies:e=>{t((0,w.My)(e))}})))(P)}}]),HighResolutionTimingSupported&&(shellPerformance.mark("shell_umc_mecontrol_end"),shellPerformance.measure("shell_umc_mecontrol","shell_umc_mecontrol_start","shell_umc_mecontrol_end"));