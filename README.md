RequireJS Config Web User Control
=========================

Small user control to centralize configuration of require js in web forms apps (if you are doomed to use it/work on one).

Usage in desired WebForm (plus uc1 namespace declaration either in particular .aspx file - automatic if dragged and dropped, or in web.config - same as asp namespace) : 

```ASP
<uc1:CommonRequireJSConfig runat="server" ID="CommonRequireJSConfig" DataMain="app" />
```
Where DataMain is a property that acts like data-main property on the script tag for RequireJS lib. Markup in CommonRequireJSConfig user control is just sample, feel free to modify as needed. Everywhere you add it it will first load RequireJS, than configure as needed, than instrument RequireJS to load module you spedified in DataMain property.

Enjoy, Dušan