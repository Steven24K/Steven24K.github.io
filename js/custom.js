//This is to remove the "en" part in the url since I don't use it, and is part of docusaurus default setting so you can't remove it from
//the config file. This code snippet removes the "en" part from the URL.

if (document.URL.includes("/en/")) {
    var url = document.URL
    var splitUrl = url.split("/en")
    newUrl = splitUrl[0] + splitUrl[1]
    document.location.replace(newUrl)
}