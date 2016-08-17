var skillset = {
  programming: {
      skillname: {
        skill: "",
        img_src: "",
        desc: ""
      },
      skillname2: {
        skill: "",
        img_src: "",
        desc: ""
      },
      skillname3: {
        skill: "",
        img_src: "",
        desc: ""
      },
      skillname4: {
        skill: "",
        img_src: "",
        desc: ""
      }
  },
  design: {
    skillname: {
      skill: "",
      img_src: "",
      desc: ""
    },
    skillname2: {
      skill: "",
      img_src: "",
      desc: ""
    },
    skillname3: {
      skill: "",
      img_src: "",
      desc: ""
    },
    skillname4: {
      skill: "",
      img_src: "",
      desc: ""
    }
  },
  communication: {
    skillname: {
      skill: "",
      img_src: "",
      desc: ""
    },
    skillname2: {
      skill: "",
      img_src: "",
      desc: ""
    },
    skillname3: {
      skill: "",
      img_src: "",
      desc: ""
    },
    skillname4: {
      skill: "",
      img_src: "",
      desc: ""
    }
  }
};


var getObjValues = function(data){
  var skill = data.skill;
  var img_src =data.img_src;
  var desc = data.desc;
  var html_input = '<div class="panel panel-default gen-panel"><div class="panel-heading">'+skill+
                      '</div><div class="panel-body"><img src="'+img_src+'"/></br><p>'+desc+'</p></div></div>';
  return html_input;
};

$.each(skillset, function(key, value){
  var skill, img_src, desc = "";
  var html_input = '<div class="panel panel-default"><div class="panel-heading">'+skill+
                      '</div><div class="panel-body"><img src="'+img_src+'"/></br><p>'+desc+'</p></div></div>';
  switch(key){
    case 'programming':
      $.each(skillset.programming, function(key, value){
        var html = getObjValues(value);
        $('#programming_panel').append(html);
      });
      break;
    case 'design':
      $.each(skillset.design, function(key, value){
        var html = getObjValues(value);
        $('#design_panel').append(html);
      });
      break;
    case 'communication':
      $.each(skillset.communication, function(key, value){
        var html = getObjValues(value);
        $('#communication_panel').append(html);
      });
      break;
    default: break;
  }
});
