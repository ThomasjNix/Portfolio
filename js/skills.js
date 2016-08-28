var skillset = {
  programming: {
      skillJS: {
        skill: "JavaScript/jQuery",
        img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/js_logo.png",
        desc: "JavaScript is the core functionality component of web development, and after learning the fundamentals of the JavaScript language, I went on to include the jQuery library into my skillset for better coding."
      },
      skillGrunt: {
        skill: "GruntJS",
        img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/grunt_logo.png",
        desc: "GruntJS is a taskrunner I used for this specific project in order to transcode SASS to CSS, concatenate CSS and JavaScript, and uglify (minify) JavaScript files, all to a single distribution folder for faster and more efficient loading."
      },
      skillJava: {
        skill: "Java",
        img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/java_logo.png",
        desc: "Java is the first language I was somewhat fluent with. It is an object-oriented programming language that I use for most, if not all, of my coding assignments at UNCC. Examples can be found on my GitHub page."
      },
      skillNode: {
        skill: "NodeJS/ExpressJS",
        img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/nodejs_logo.png",
        desc: "Although still a beginner, I have been practicing with NodeJS and ExpressJS on the back-end for web development. I find it to be a clean and concise way to handle server side operations using a language I am already familiar with, JavaScript."
      },
      skillASP_MVC: {
        skill: "ASP.NET MVC",
        img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/asp_logo.png",
        desc: "This is a skill I am not very proficient with but practiced while interning for Roush Fenway Racing. I used the APS.NET MVC (Model View Controller) for front-end/back-end communication, and for the base I used C# rather than VB Script."
      },
      skill_Ruby: {
        skill: "Ruby/Rails",
        img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/ruby-on-rails_logo.png",
        desc: "I am currently in the process of learning Ruby and the Rails framework as part of a class requirement. I do enjoy coding with Ruby, and the MVC pattern along side the ease of Ruby syntax is making Rails an approachable topic."
      }
  },
  design: {
    skillHTML: {
      skill: "HTML",
      img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/html_logo.png",
      desc: "HTML is the fundamental building block of web development, and as such was the first structure I learned (and continued to learn) how to effeciently use."
    },
    skillCSS: {
      skill: "CSS/SASS",
      img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/css_logo.png",
      desc: "CSS is the stylistic backbone component of all web pages. After learning how CSS works, I went on to learn how to use SASS for more efficient writing and compiling."
    },
    skillBootstrap: {
      skill: "Bootstrap",
      img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/bootstrap_logo.png",
      desc: "Bootstrap has been a fundamental tool for me in web design as it allows for prebuilt classes that greatly aid in the creation of sleek and stylish pages. "
    },
    skillResponsive: {
      skill: "Responsive Design/Mobile Design",
      img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/mobile_logo.png",
      desc: "With the use of Bootstrap classes and media queries, I have developed some skill in designing pages for mobile responsivity. This page is actually compatible with mobile, feel free to check it out on your phone or tablet!"
    }
  },
  communication: {
    skillTeamwork: {
      skill: "Teamwork",
      img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/teamwork_logo.png",
      desc: "Through my development journies I have learned that teamwork is a quintessential element of development. Working with my group for the SAS Global Forum presentation, working with peers for class assignments, and working as a team at Roush, I've learned to effectively communicate what I need to do and any concerns that I have."
    },
    skillQuestions: {
      skill: "Asking questions",
      img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/questionmark_logo.png",
      desc: "Nobody knows everything, and that is why it is important to ask questions when you have them. Working with more skilled developers, one of the greatest tools in my toolbelt is formulating and posing questions so that I can further my knowledge on any subject."
    },
    skillPlanning: {
      skill: "Planning",
      img_src: "http://webpages.uncc.edu/tnix2/img/skills_images/planning_logo.png",
      desc: "Whether working alone or with peers, the first step I always take for an assignment or project is to plan ahead. I always ask 'what do I need to do and how can I do it', normally brainstorming some ideas on paper or whiteboard before working on any project."
    }
  }
};


var getObjValues = function(data){
  var skill = data.skill;
  var img_src =data.img_src;
  var desc = data.desc;
  var html_output = '<div class="col-lg-3"><div class="panel panel-default gen-panel"><div class="panel-heading">'+skill+
                      '</div><div class="panel-body"><img src="'+img_src+'"/></br><p>'+desc+'</p></div></div></div>';
  return html_output;
};

$.each(skillset, function(key, value){
  var skill, img_src, desc = "";
  switch(key){
    case 'programming':
      $.each(skillset.programming, function(key, value){
        var html = getObjValues(value);
        $('#programming_panel .row').append(html);
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
