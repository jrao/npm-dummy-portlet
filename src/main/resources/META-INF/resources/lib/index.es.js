export default function(params) {
    var out = document.getElementById(params.portletElementId);

    out.innerHTML = 'Portlet Namespace: ' + params.portletNamespace + '<br/>Context Path: ' + params.contextPath + '<br/>Portlet Element Id: ' + params.portletElementId;
}
