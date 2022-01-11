var project_data_dict = [
    {
      "pid":"1",
      "Title":"Video Summerization",
      "Fields":"Deep learning,Computer vision",
      "Domain":"CCTV Surveillance",
      "Description":"I had worked on this project while doing my internship at @Lookman_Electroplast, it include many features like Vehicle & Pedestrain Detection, Object Tracking, Vehicle monitoring etc. Main purpose is  to make shorter video from source video such that it includes only necessary objects and events in which clients are interested (ex: Suppose client wants only red color cars which took left turn so extract them and make short video)",
      "image-path":"vss.jpg",
      "GitHub":"None"
    },
    {
      "pid":"2",
      "Title":"Satellite Image Denoising",
      "Fields":"Deep learning",
      "Domain":"Remote Sensing",
      "Description":"In this we proposed one unique approach to denoise satellite image using deep learning concept it also known as Atmosphric correction process, In that we developed different CNN architectures which gives great performance two of the best architectures are Residual based Learning and Inception based architecture.",
      "image-path":"satellite.jpg",
      "GitHub":"None"

    },
    {
      "pid":"3",
      "Title":"Wheat Crop Yield Prediction",
      "Fields":"Deep learning,Machine Learning",
      "Domain":"Agriculture & Remote Sensing",
      "Description":"Wheat crop yield prediction is deep learning based solution to estimate future crop yield from its past history along with satellite images, we have build CNN+LSTM model that takes two different inputs one is images and other is text information needed like area of agricultural land, total yield.",
      "image-path":"wheat.jpg",
      "GitHub":"None"
    },
    {

      "pid":"4",
      "Title":"Search History Based Recommendation System",
      "Fields":"Data Mining,Machine Learning",
      "Domain":"E-commerce",
      "Description":"It is a Machine Learning based system that recommend products by analyzing users search history and i had used methods of data mining and machine learning to process the data and gives recommendations.",
      "image-path":"rec.png",
      "GitHub":"None"
      
    },
    {
      "pid":"5",
      "Title":"Smart vision Application",
      "Fields":"Computer Vision",
      "Domain":"Not mentioned",
      "Description":"It is purely vision based application that consists of some components like face landmarks detection, hands landmarks detection and image filtering. provides multiple features like eye blink counting, face expression recognization, virtual drawing using finger and more.",
      "image-path":"smart-vision.png",
      "GitHub":"https://github.com/hasit73/Smart-computer-vision-application"


    },
  ]

var current_url = new URL(window.location.href)
var pid = current_url.searchParams.get("pid")
function setProjectData(pid){
    var project_div = $("#project-info ul");
    var selected_project = project_data_dict.filter(e=>{ if(e["pid"]==pid){ return e } })[0]
    var html_text = "";
    for (var k in selected_project){
      if(k!="pid" && k!="Description" && k!="image-path" && k!="GitHub"){
        var li_html = `<li><strong>${k}</strong>: ${selected_project[k]}</li>`;
        html_text+=li_html
      }
    }
    if(selected_project["GitHub"]=="None"){
      html_text+=`<li><strong>GitHub : </strong><a>Not available</a></li>`
    }else{
      html_text+=`<li><strong>GitHub : </strong><a href="${selected_project['GitHub']}">${selected_project['GitHub']}</a></li>`
    }
    project_div[0].innerHTML = html_text;

    $(".portfolio-description p")[0].innerText = selected_project["Description"]
    $("#project-name-title")[0].innerText = selected_project["Title"]
    $("#project-image-source")[0].setAttribute("src","assets/img/"+selected_project["image-path"])
}

setProjectData(pid)