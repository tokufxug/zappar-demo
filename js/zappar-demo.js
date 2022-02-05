'use strict';

function onLoadFunction()
{
    document.getElementById("ar-view").style.display = 'block';
    initLocationARZappar();
}

function initLocationARZappar()
{
    const zapparMarker = document.getElementById("zappar-marker");
    const model = document.getElementById("model");
    model.setAttribute("visible", false);

    zapparMarker.addEventListener("zappar-visible", () => {
        model.setAttribute("visible", true);
    });
    zapparMarker.addEventListener("zappar-notvisible", () => {
        model.setAttribute("visible", false);
    });
}
window.onload = onLoadFunction;
