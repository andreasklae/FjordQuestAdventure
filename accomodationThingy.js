let html = `
<div 
    id="accommodationToggle" 
    class="toggleButton"
    onclick="toggle('accommodationContainer', 'accommodationArrow')"
>
    <h1>Accommodation</h1>
    
    <div id="accommodationArrow" class="arrowClosed toggleTransition">
        <h1>›</h1>
    </div>
</div>

<div id="accommodationContainer" class="cardContainer">
    <div id="navContainer">
        <div id="destNavBar">
                
        </div>
        <div id="selectedBoxContainer">
            <div class="selectedItem" id="navLeftBound"></div>
            <div class="selectedItem" id="selected"></div>
            <div class="selectedItem" id="navRightBound"></div>
        </div>
    </div>
    <div id="accommodationContent"></div>
</div>
<script src="accommodationCards.js"></script>
<script src="destNavBar.js"></script>
`

#accommodationContent{
    width: 90vw;
    max-width: 1100px;
}

