$(function(){

  const userName = 'koharaillustration'
  const key = 'h6X7eQcLgx1kIIWEtpb0HJKLU6j8ee6A';


  let projectHTML = $('#project-template').text();
  let projectTemplate = Template7(projectHTML).compile();

  //get list projects
  let urlProjects = 'https://api.behance.net/v2/users/'+ userName +'/projects?client_id='+key;
  $.ajax({
    url:urlProjects,
    dataType:'jsonp',
    success:function(res){

      //console.log(res);

      let projects = res.projects;
      
      for(var i=0;i<12;i++){
        let project = projects[i];
        let output = projectTemplate(project);
        $('.project-container').append(output);

        // for(var i=0;i<projects.length;i++){
        // let project = projects[i];
        // let output = projectTemplate(project);
        // $('.project-container').append(output);

      }
    }
  });

  //project modal popup

  let projectDetailsHTML = $('#project-details-template').text();
  let projectDetailsTemplate = Template7(projectDetailsHTML).compile();

  $('#portfolioModal').on('show.bs.modal',function(e){

    let target = e.relatedTarget;
    let projectid = $(target).data('projectid');

    let urlProject = 'http://www.behance.net/v2/projects/'+projectid+'?api_key='+key;

    $.ajax({
      url: urlProject,
      dataType:'jsonp',
      success:function(res){
        let project = res.project;
        let output = projectDetailsTemplate(project);
        $('.project-details').empty();
        $('.project-details').append(output);
      }
    });
    
  });

  //team----------

  let teamHTML = $('#team-template').text();
  let teamTemplate = Template7(teamHTML).compile();

  let urlTeam = 'http://www.behance.net/v2/users/koharaillustration/following?client_id='+key;

  $.ajax({
    url: urlTeam,
    dataType:'jsonp',
    success:function(res){

      // console.log(res);
      let followers = res.following;

      for(var i=0; i<6;i++){
        let follower = followers[i];
        let output = teamTemplate(follower);
        $('.team-container').append(output);
      }
    }
  });
  
});














