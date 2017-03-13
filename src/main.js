$(document).ready(function() {
  
  var toHTML = ''

  toHTML += `<div id='cTopTitle'>Sign Up for My Webb App</div> `

  toHTML += `<div id='cForm'>`

  $.getJSON('http://json-data.herokuapp.com/forms', function(formData) {
  
    formData.forEach(function(fld) {

      

      if (fld.type === "text") {

        
        toHTML += `<div class='cInpDiv'>`
        toHTML += ` <input class='cInp' type='${fld.type}' placeholder='${fld.label}' id='${fld.id}' /> `
        toHTML += `<i class='fa ${fld.icon}' />`
        toHTML += `</div>`
        
      } else if (fld.type === "email") {

        
        toHTML += `<div class='cInpDiv'>`
        toHTML += ` <input class='cInp' type='${fld.type}' placeholder='${fld.label}' id='${fld.id}' /> `
        toHTML += `<i class='fa ${fld.icon}' />`
        toHTML += `</div>`
        
      } else if (fld.type === "tel") {
        
        toHTML += `<div class='cInpDiv'>`
        toHTML += ` <input class='cInp' type='${fld.type}' placeholder='${fld.label}' id='${fld.id}' /> `
        toHTML += `<i class='fa ${fld.icon}' />`
        toHTML += `</div>`
        
      } else if (fld.type === "textarea") {
        
        toHTML += `<div class='cInpDiv'>`
        toHTML += ` <textarea class='cInp' type='${fld.type}' placeholder='${fld.label}' id='${fld.id}' /> `
        toHTML += `<i class='fa ${fld.icon}' />`
        toHTML += `</div>`
        
      } else if (fld.type === "select") {
        
        toHTML += `<div class='cInpDiv'>`
        toHTML += ` <select class='cInp' type='${fld.type}' placeholder='${fld.label}' id='${fld.id}'> `
        toHTML += `<option>Select Language...</option>`
        fld.options.forEach((opt) => {
          toHTML += `<option>${opt.label}</option>`
            
        })
        toHTML += `</select>`
        toHTML += `<i class='fa ${fld.icon}' />`
        toHTML += `</div>`
        
      }


    }) // forEach



    toHTML += `</div>`
    toHTML += `<div id=cFormFooter> 
    <div id="cSubmit">Submit</div>
  
    </div>`
    toHTML += `<div id="cFootPad"></div>`

    $('#cApp').html(toHTML);


    $('#cSubmit').hover(function() { 

      $(this).css('cursor','pointer') 

      $(this).css('border','1px solid #FFF') 

      $(this).css('box-shadow','0 0 15px #FFF') 

    }, function() { 

     $(this).css('border','none') 

     $(this).css('box-shadow','0 0 0px #999') 

    })


    $('#cSubmit').on('click', function() { 

      $('#cApp').append('<div id="cCover"></div><div id="cThank">Thank you!</div>')

      
    })

  }) 

})