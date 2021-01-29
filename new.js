var fileUploadHeight; var declarationHeight; var authourizationHeight

var slider = document.getElementById("slider")

var slee = document.getElementById("slee")

var sliderStyle = document.querySelector('.sliderstyle')

var topper = document.querySelector('.topper')

var html = document.querySelector('html')

var body = document.querySelector('body')

var nav = document.querySelector('nav')

var footer = document.querySelector('footer')

var chooseForm = document.querySelector('.choose-form')

var padAdj = topper.offsetHeight +"px 0 "+ footer.offsetHeight +"px 0"

var navSpans = nav.firstElementChild.querySelectorAll('span')

body.style.padding = padAdj

var gre = document.querySelectorAll('*')


function elpis () {
    alert('Elpis')
}

function toggleNav() {
    if (nav.lastElementChild.clientHeight == 0) {
        nav.firstElementChild.className = 'disnav'
    } else {
        nav.firstElementChild.className = ''
    }
}

function removeNav() {
    if (nav.lastElementChild.clientHeight != 0) {
        nav.firstElementChild.className = ''
    }
}

function colorSlideFirst(){
    if (slider.value == 1) {
        slider.id = 'slider2';
        slee.innerHTML = 'Light'
        sliderStyle.type = 'text'
    }else{
        slider.id = 'slider';
        slee.innerHTML = 'Dark'
        sliderStyle.type = ''
    }
}

function colorSlide () {
    if (this.id == 'slider') {
        this.id = 'slider2';
        slee.innerHTML = 'Light'
        sliderStyle.type = 'text'
    }else{
        this.id = 'slider'
        slee.innerHTML = 'Dark'
        sliderStyle.type = ''
    }
}

function displayFormFirst () {

    fSlide = chooseForm.value

    fSlide = "#form-slide-" + fSlide

    actForm  = document.querySelector(fSlide)

    actForm.style.display = 'block'

    allFormOperations(actForm);
}

function displayForm () {

    ade = actForm

    fSlide = this.value

    fSlide = "#form-slide-" + fSlide

    actForm  = document.querySelector(fSlide)

    ade.style.display = 'none'

    removeAllFormOperations(ade)

    actForm.style.display = 'block'

    allFormOperations(actForm);
}

function offTransition() {
    for (i = 0; i < gre.length; i++){
        gre[i].style.transition = 'all 0s';
    }
}

function setTransition(x) {
    for (i = 0; i < gre.length; i++){
        gre[i].style.transition = 'all '+ x +'s';
    }
}

function defaultTransition() {
    for (i = 0; i < gre.length; i++){
        gre[i].style.transition = '';
    }
}

function removeAllFormOperations (form) {
    var fileinput = form.querySelector('#ff-utility')

    var fileinputbutton = form.querySelector('#ff-utility-show')
    
    var fileremove = form.querySelector('#ff-utility-remove')
    
    var fileUpload = form.querySelector('#file-upload')
    
    var declaration = form.querySelector('#declaration')
    
    var authourization = form.querySelector('#authourization')
    
    var authbtn = form.querySelector('#autho')
    
    var declbtn = form.querySelector('#decla')

    function showItem(itemTag) {
        itemTag.style.height = ''
        itemTag.style.margin = ''
        itemTag.style.padding = ''
    }

    showItem(fileUpload)
    showItem(declaration)
    showItem(authourization)
}

function allFormOperations(form) {

    var fileinput = form.querySelector('#ff-utility')

    var fileinputbutton = form.querySelector('#ff-utility-show')
    
    var fileremove = form.querySelector('#ff-utility-remove')
    
    var fileUpload = form.querySelector('#file-upload')
    
    var declaration = form.querySelector('#declaration')
    
    var authourization = form.querySelector('#authourization')
    
    var authbtn = form.querySelector('#autho')
    
    var declbtn = form.querySelector('#decla')


    function resetColorOfFileInput() {
        if (fileinput.value == '') {
            fileinputbutton.id = 'ff-utility-show';
            fileinputbutton.innerHTML = 'Choose Your file';
            fileremove.style.display = 'none';
            fileUpload.innerHTML = 'No File Uploaded'
            hideItem(fileUpload);
        }
        else{
            fileinputbutton.id = 'ff-utility-show-yes';
            fileinputbutton.innerHTML = 'Upload Successful';
            fileremove.style.display = 'block';
            showItem(fileUpload, fileUploadHeight);
            fileUpload.innerHTML = 'Uploaded File - ' + fileinput.value.replace(/.*[\/\\]/, '')
        }
    }
    
    function removeUploadedFile() {
    
        var me = prompt('Are you sure you want to remove the uploaded file(y/n): ')
    
        if (me == 'y' || me == 'yes') {
            fileinput.value = '';
        }
    
        resetColorOfFileInput()
    }
    
    function showItem(item, itemHeight){
        item.style.height = '0'
        item.style.padding = '0'
        item.style.margin = '0'
    
        item.style.height = itemHeight + 'px';
        item.style.padding = ''
        item.style.margin = ''
    }
    
    function hideItem(item){
        item.style.height = '0'
        item.style.padding = '0'
        item.style.margin = '0'
    }
    
    function initItem(item){
        item.style.height = '0'
        item.style.padding = '0'
        item.style.margin = '0'
        item.style.overflow = 'hidden'
    }
    
    function getHeight(item) {
        return item.clientHeight;
    }
    
    function showOrHideLaration(item, itemHeight) {
        if (item.clientHeight == 0) {
    
            showItem(item, itemHeight);
    
            item.parentElement.firstElementChild.className = 'show-confg';
        } 
        else {
    
            hideItem(item);
    
            item.parentElement.firstElementChild.className = ''
        }
    }
    
    if (fileinput != null) {
        fileinput.oninput = resetColorOfFileInput
    }    
    
    fileremove.addEventListener('click', removeUploadedFile)
    
    setTimeout(function () {fileUploadHeight = getHeight(fileUpload)}, 1)
    
    setTimeout(function () {initItem(fileUpload)}, 2)
    
    setTimeout(function () {declarationHeight = getHeight(declaration); console.log(getHeight(declaration));}, 1)
    
    setTimeout(function () {initItem(declaration)}, 2)
    
    setTimeout(function () {authourizationHeight = getHeight(authourization)}, 1)
    
    setTimeout(function () {initItem(authourization)}, 2)
    
    declbtn.addEventListener('click', function(){showOrHideLaration(declaration, declarationHeight)})
    
    authbtn.addEventListener('click', function(){showOrHideLaration(authourization, authourizationHeight)})
}

if (chooseForm != null) {
    
    chooseForm.oninput = displayForm
    
    window.addEventListener('load', displayFormFirst)
}

if (navSpans != null) {
    for (let i = 0; i < navSpans.length; i++) {
        navSpans[i].addEventListener('click', toggleNav)
        
    }
}


slider.oninput = colorSlide

html.addEventListener('click', removeNav)

window.addEventListener('load', colorSlideFirst)

window.addEventListener('load', offTransition)

setTimeout(defaultTransition, 500)
