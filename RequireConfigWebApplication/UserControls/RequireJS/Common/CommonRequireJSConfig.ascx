<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CommonRequireJSConfig.ascx.cs" Inherits="WebApplication2.UserControls.Common.CommonRequireJSConfig" %>
<%--link to require js + all config goes here--%>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.8/require.js"></script>
<script>
    requirejs.config({
        "paths": {
            "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min"
        }
    });

    requirejs(["<%= DataMain %>"]);
</script>