body, html {
    width:100%;
    height:100%;
    margin:0;
    background-color:navy;
}
.planet {
    position:absolute;
    background-color:rgba(0, 0, 0, 0);
    border-color:yellow;
    aspect-ratio: 1;
    border-radius:50%;
    border-style:dotted;
    transform:translate(-50%, -50%);
}
.grid {
    display:grid;
    width:100vw;
    height:100vh;
    overflow:hidden;
}
#info {
    position:relative;
    overflow:auto;
    background-color:white;
    transition: all ease-in-out 0.5s;
    -ms-overflow-style:none;
    scrollbar-width:none;
}
#info::-webkit-scrollbar {
    display:none;
}
#imageBox {
    position:relative;
    background-image:url("solarSystem.jpg");
    background-repeat:no-repeat;
    display:inline-block;
}
li {
    word-break:keep-all;
    font-size:1rem;
    display:inline-block;
}
#closeButton {
    color:gray;
    border:0;
    border-radius:5px;
}
#closeButton, #title, #image, li {
    margin:10px;
}
.change {
    height:1.5rem;
    aspect-ratio:1.5;
    padding:0;
}
#image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-style:solid;
    padding:10px;
}
/* 세로로 길 때*/
@media (max-aspect-ratio:1317/798) {
    #imageBox {
        width:100vw;
        height:calc(100vw * 798 / 1317);
        background-size:cover;
    }
    #image {
        width:50%;
    }
    .grid {
        grid-template-rows:calc(100vw * 798 / 1317) 1fr;
    }
    #info {
        top:calc(-100vw * 798 / 1317 + 100vh);
        height:75vh;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }
    #closeButton {
        width:100%;
    }
}
/*가로로 길 때*/
@media (min-aspect-ratio:1317/798) {
    #imageBox {
        width:calc(100vh * 1317 / 798);
        height:100vh;
        background-size:contain;
    }
    #image {
        width:90%;
    }
    .grid {
        grid-template-columns:calc(100vh * 1317 / 798) 1fr;
    }
    #info {
        left:calc(-100vh * 1317 / 798 + 100vw);
        width:25vw;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
    }
    #closeButton {
        width:10%;
        aspect-ratio:1;
    }
}
