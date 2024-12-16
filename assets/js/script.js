
// select_box start
if (document.querySelectorAll('.select_box .view_text')!=null) {
  let select_box= document.querySelectorAll('.select_box .view_text');
  select_box.forEach(select_box_ele => {
    
    select_box_ele.addEventListener('click', ()=>{
      select_box_ele.parentElement.classList.toggle('show');
    })
  });
}
// select_box start


// min-price start
if (document.getElementById('min-price') !=null) {
  const minSlider = document.getElementById('min-price');
  const maxSlider = document.getElementById('max-price');
  const priceRangeMin = document.getElementById('price-range-min');
  const priceRangeMax = document.getElementById('price-range-max');
  console.log();

  if (minSlider !== null) {
    minSlider.oninput = function() {
      priceRangeMin.textContent = minSlider.value;
      
    };
  
    maxSlider.oninput = function() {
      priceRangeMax.textContent = maxSlider.value;
    };
  }
}
// min-price start


// tab_main start
if (document.querySelectorAll('.tab_main .tab_item') !=null) {
  let tab_item= document.querySelectorAll('.tab_main .tab_item');
  let tab_desc= document.querySelectorAll('.tab_desc');
  
  tab_item.forEach(tab_item_ele => {
    tab_item_ele.addEventListener('click', ()=>{
  
      tab_item.forEach(intab_item_ele => {
        intab_item_ele.classList.remove('active')
      });
  
      tab_desc.forEach(tab_desc_ele => {
        tab_desc_ele.classList.remove('show')
      });
  
      tab_item_ele.classList.toggle('active');
  
      let item_name= tab_item_ele.getAttribute('name');
      document.querySelector(`#${item_name}`).classList.toggle('show');
    })
  });
}
// tab_main start


// card_right_main start
if (document.querySelector('.card_right_main') !== null) {
  let=card_right_main= document.querySelector('.card_right_main');
  let background=document.createElement('div');
  background.classList.add('mod_background');
  
  document.querySelector('.card_icon').addEventListener('click', ()=>{
    card_right_main.classList.add('active');
    document.querySelector('body').append(background);
  })
  
  document.querySelector('.card_remove').addEventListener('click', ()=>{
    card_right_main.classList.remove('active');
    document.querySelector('.mod_background').remove();
  })
}
// card_right_main start


// banner-slider start
if (document.querySelector('.banner-slider') !== null) {
  $(".banner-slider").owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<i class="fa-solid fa-arrow-right"></i>', '<i class="fa-solid fa-arrow-left"></i>'],
    responsive: {
      0: {
          items: 1,
          margin: 0
      },
      700: {
          items: 1,
          margin: 0
      },
      1200: {
        items: 1,
        margin: 0
      },
      1400: {
        items: 1,
        margin: 0
    }
  }

});
}
// banner-slider start


// categorie-slider start
if (document.querySelector('.categorie-slider') !== null) {
  $(".categorie-slider").owlCarousel({
    loop: false,
    margin: 45,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<i class="fa-solid fa-arrow-right"></i>', '<i class="fa-solid fa-arrow-left"></i>'],
    responsive: {
      0: {
          items: 2,
          margin: 20
      },
      700: {
          items: 3,
          margin: 20
      },
      1200: {
        items: 5,
        margin: 20
      },
      1400: {
        items: 6,
        margin: 20
    }
  }
  
  });
  
}
// categorie-slider start


// testimonial-slider start
if (document.querySelector('.testimonial-slider') !== null) {
  $(".testimonial-slider").owlCarousel({
    loop: false,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<i class="fa-solid fa-arrow-right"></i>', '<i class="fa-solid fa-arrow-left"></i>'],
    responsive: {
      0: {
          items: 1,
          margin: 20
      },
      700: {
          items: 2,
          margin: 20
      },
      1200: {
        items: 3,
        margin: 20
      },
      1400: {
        items: 3,
        margin: 20
    }
  }
  
  });
  
}
// testimonial-slider start


// slider-for start
if (document.querySelector('.slider-for') !== null) {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
        }
      }
    ]
  });
  
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 5,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    horizontal: false,
    horizontalSwiping: false,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-right"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-left"></i></button>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          horizontal: true,
          horizontalSwiping: true,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });
}
// slider-for start


// thumb-edit start
if (document.querySelectorAll('.thumb-edit input') !=null) {
  let file_image = document.querySelectorAll('.thumb-edit input');

  file_image.forEach(file_image_ele => {
    file_image_ele.addEventListener('change', () => {
      const file = file_image_ele.files[0];
  
      // Get the selected file
      if (file) {
        const reader = new FileReader(); // Create a FileReader instance
  
        reader.onload = function (e) {
          // Set the image src to the file's data URL
          file_image_ele.parentElement.parentElement.querySelector('.ec-image-preview').setAttribute('src', e.target.result);
        };
  
        reader.readAsDataURL(file); // Read the file as a data URL
      }
    });
  });
}
// thumb-edit start


// toggle_menu start
if (document.querySelector('#toggle') !=null) {
  let background=document.createElement('div');
  background.classList.add('mod_background');

  document.querySelector('#toggle').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('show');
    document.querySelector('#toggle').classList.toggle('on');

    if (document.querySelector('#menu.show')!=null) {
      document.querySelector('body').append(background);
    }
    else{
      document.querySelector('.mod_background').remove();
    }
  });
}
// toggle_menu start


// toggle-bars start
if (document.querySelector('.toggle-bars') !=null) {

  document.querySelector('.toggle-bars').addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('aside-mini');
  })

}
// toggle-bars start


// darkmode start
if (document.querySelector('.darkmode') !=null) {

  let darkmode= document.querySelector('.darkmode');
  darkmode.addEventListener('click', darkmodeAdd);

  document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('darkmode')=='true') {
      darkmodeAdd();
    }
  });

  function darkmodeAdd(){
    let root = document.documentElement;


    if (localStorage.getItem('darkmode') !=true && document.querySelector('.darkmodeActive') ==null) {
      
        root.style.setProperty('--main_background', '#222736');
        root.style.setProperty('--White_color', '#2a3042');
        root.style.setProperty('--Light_border', '#383e50');
        root.style.setProperty('--input_color', '#1e2231');
        root.style.setProperty('--admin_color1', '#32394e');
        root.style.setProperty('--admin_color2', '#ccc');
        root.style.setProperty('--hover_color', '#fff');
        root.style.setProperty('--admin_color3', '#fff');
        root.style.setProperty('--input_border', '#383e50');
        root.style.setProperty('--link_hover', '#383e50');
        root.style.setProperty('--para_color', '#d9d9d9');
        root.style.setProperty('--menu_link', 'rgb(152 179 153 / 15%)');
        root.style.setProperty('--pagination_color', '#2a3042');
        root.style.setProperty('--pagination_color1', '#383e50');

        darkmode.classList.add('active');
        document.querySelector('body').classList.add('darkmodeActive');
        localStorage.setItem('darkmode', 'true');
    }
    else{
      
        root.style.setProperty('--main_background', '#f8f9fa');
        root.style.setProperty('--White_color', '#fff');
        root.style.setProperty('--Light_border', '#eee');
        root.style.setProperty('--input_color', '#f4f5f9');
        root.style.setProperty('--admin_color1', '#f7f8f9');
        root.style.setProperty('--admin_color2', '#495058');
        root.style.setProperty('--hover_color', '#141432');
        root.style.setProperty('--admin_color3', '#383e50');
        root.style.setProperty('--input_border', '#f4f5f9');
        root.style.setProperty('--link_hover', '#e9ecef');
        root.style.setProperty('--para_color', '#4f5d77');
        root.style.setProperty('--menu_link', 'rgba(0, 178, 7, .15)');
        root.style.setProperty('--pagination_color', '#a1a1a1');
        root.style.setProperty('--pagination_color1', '#6c757d');

        darkmode.classList.remove('active');
        document.querySelector('body').classList.remove('darkmodeActive');
        localStorage.setItem('darkmode', 'false');
    }
  }

}
// darkmode start


// search_icon start
if (document.querySelector('.search_icon') !=null) {
  document.querySelector('.search_icon').addEventListener('click', ()=>{
    document.querySelector('.lg_menu').classList.add('search_active');
  })
}
// search_icon start


// moble_filter start
if (document.querySelector('.moble_filter') !=null) {
  document.querySelector('.moble_filter').addEventListener('click', ()=>{
    document.querySelector('.moble_filter').classList.toggle('toggle_filter');
    document.querySelector('.shopside_bar').classList.toggle('show_side_bar')
    
  })
}
// moble_filter start


// common_toggle_btn start
  document.querySelectorAll('.common_toggle_btn').forEach(common_toggle_btn_ele => {
    common_toggle_btn_ele.addEventListener('click', ()=>{
      common_toggle_btn_ele.classList.toggle('active')
  
    })
  });
// common_toggle_btn end


// address start
if (document.querySelector('.add_new_address')!=null) {

  let Addressind=1;
  document.querySelector('.add_new_address').addEventListener('click', ()=>{
    const edit_form  = document.querySelector(".edit_form ");
    let input_group=document.createElement('div');
    input_group.classList.add('col-12', 'form-group');
    input_group.innerHTML=`
                          <label for="address${Addressind}" class="form-label">Address${Addressind} <button class="btn card-btn btn-danger removeaddress" onclick="removeAddress(this)"><i class="bi bi-trash"></i></button></label>
                          <input type="text" class="form-control slug-title" id="address${Addressind}"></input>
                        `;
    edit_form .prepend(input_group);
  
    Addressind++
  })

  function removeAddress(ele) {
    ele.parentElement.parentElement.remove();
  }
}
// address end


  let filter_input = document.querySelectorAll('.filter_input');
    filter_input.forEach(filter_input_ele => {
        filter_input_ele.addEventListener('click', ()=>{
            filter_input_ele.parentElement.classList.toggle('active')
            console.log(filter_input_ele.parentElement);
        })
    });