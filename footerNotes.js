windowObject.addEventListener = (width, footerOne, footerTwo) => {

    if(footerOne.currentTarget.id == "yes"){
        windowObject = (width);
        return footerOne
    }
    
    else if(footerOne.currentTarget.id == "no"){
        windowObject = (width);
    }

};