<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication2.Pages.WebForm1" %>

<%@ Register Src="~/UserControls/RequireJS/Common/CommonRequireJSConfig.ascx" TagPrefix="uc1" TagName="CommonRequireJSConfig" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>trest</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <input id="btn1" type="button" value="1" />
            <input id="btn2" type="button" value="2" />
            <input id="btn3" type="button" value="3" />
        </div>
    </form>
    <uc1:CommonRequireJSConfig runat="server" ID="CommonRequireJSConfig" DataMain="app" />
</body>
</html>
