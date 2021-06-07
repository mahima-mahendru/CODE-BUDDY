$(document).ready(function(){
    $('button').click(function(){
        const name=$('#btn').val();
       // <!-- alert(name); -->
        const url=" https://codeforces.com/api/user.info?handles="+name;
        const urll="https://codeforces.com/api/user.rating?handle="+name;
      //  console.log(url);
        async function getdata() {

            const response= await fetch(url);
           
            const data= await response.json();
            if(data.status=="FAILED")
            {
                alert("User not exist");
            }
         
           else
            { 
             const rating =data.result[0].rating;
            let html="";
            html=`       
            <h3>OVERALL ANALYSIS</h3>      
            <table class="content-table">
                <tr class="first">
                <td>First Name </td>
                <td id="frstnme">${data.result[0].firstName}</td>
             </tr>
                <tr class="second">
                <td>Second Name </td>
                <td id="scndnme">${data.result[0].lastName}</td>
             </tr>
            <tr class="third">
                <td>Rating </td>
                <td id="rat">${data.result[0].rating}</td>
             </tr>
            <tr class="fourth">
                <td>Max Rating </td>
                <td id="mxrtng">${data.result[0].maxRating}</td>
             </tr>
                <tr class="fifth">
                <td>Current rank </td>
                <td id="crntrnk">${data.result[0].rank}</td>
             </tr>
             <tr>
                 <td>Best rank</td>
                 <td id="bstrnk"></td>
             </tr>
             <tr>
                <td>Total contest</td>
                <td id="cnt"></td>
            </tr>
                
            
            
            </table>
         
           
            
           
      `
      let htmll=`<canvas id="myChart" ></canvas>`;
     let html5=`<canvas id="myChart4" ></canvas>`;
      let html3=`<canvas id="myChart3"></canvas>`;
      let html4=`<canvas id="myChart2"></canvas>`;
      
      $.getJSON(urll,function(data){
            
        // console.log(data);
         const length=data.result.length;
         var maxi=50000;
         for(i=0;i<length;i++)
         {
             var comp=data.result[i].rank;
             //console.log(comp);
            
             if(comp<maxi)
             {maxi=comp;}
         }
         
         document.getElementById( 'bstrnk').textContent=maxi;
         document.getElementById( 'cnt').textContent=length;
     });

             /*document.getElementById( 'rat').textContent=data.result[0].rating; 
        document.getElementById( 'frstnme').textContent=data.result[0].firstName; 
           document.getElementById( 'scndnme').textContent=data.result[0].lastName;
             document.getElementById( 'mxrtng').textContent=data.result[0].maxRating;
            document.getElementById( 'crntrnk').textContent=data.result[0].rank;
            document.getElementById( 'head-container').textContent=name;}*/
            let dat=document.getElementById("tabl");
            dat.innerHTML=html;
            let chrt=document.getElementById("chrt");
            chrt.innerHTML=htmll;
            let chrt3=document.getElementById("chrt3");
            chrt3.innerHTML=html3;
            let chrt4=document.getElementById("chrt4");
            chrt4.innerHTML=html5;
            let chrt2=document.getElementById("chrt2");
            chrt2.innerHTML=html4;
            
            
        }}
       
        getdata();
       // getcontest();
       

    });

   


});










$(document).ready(function(){
    $('button').click(function(){
        const name=$('#btn').val();
        var url="https://codeforces.com/api/user.status?handle="+name+"&from=1&count=1000000000";
       // console.log(url);

        $.getJSON(url,function(data){
            
           console.log(data);
            
       
        const length=data.result.length;
        var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0;
        for(i=0;i<length;i++)
        {
            if(data.result[i].verdict=='OK')
            {

                if(data.result[i].problem.index=="A")a=a+1;
                else if(data.result[i].problem.index=="B")b=b+1;
                else if(data.result[i].problem.index=="C")c=c+1;
                else if(data.result[i].problem.index=="D")d=d+1;
                else if(data.result[i].problem.index=="E")e=e+1;
                else if(data.result[i].problem.index=="F")f=f+1;
                else if(data.result[i].problem.index=="G")g=g+1;
                else if(data.result[i].problem.index=="H")h=h+1;
                else if(data.result[i].problem.index=="I")i=i+1;
                
            }
        }
      //  console.log(b);
        var myChart=document.getElementById("myChart").getContext('2d')

        var chart =new Chart(myChart,{

            type:'bar',
            data:{
                labels: ['A', 'B', 'C', 'D', 'E', 'F'],
                datasets:[
                    {
                    label: "Category",
                    data:[a,b,c,d,e,f],
                    backgroundColor: [
                        '#c450e7',
                        '#e228a7',
                        '#e75078',
                        '#3edfe5',
                        '#50e7ad',
                        '#e7a850'
                    ],
                   /* borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1*/
                    }
                  
                ]
            },
        
        options:{}
        })

    });

    });
   


});

$(document).ready(function(){

    $('button').click(function(){
        const name=$('#btn').val();
        const url="https://codeforces.com/api/user.status?handle="+name+"&from=1&count=1000000000";
$.getJSON(url,function(data){

    var a=0,b=0,c=0,d=0,f=0,e=0;
    const length=data.result.length;
    for(var i=0;i<length;i++)
    {
        if(data.result[i].problem.index=='A')a=a+1;
        if(data.result[i].problem.index=='B')b=b+1;
        if(data.result[i].problem.index=='C')c=c+1;
        if(data.result[i].problem.index=='D')d=d+1;
        if(data.result[i].problem.index=='E')e=e+1;
        if(data.result[i].problem.index=='F')f=f+1;
    }
    var myChart=document.getElementById("myChart").getContext('3d')

    var chart2=new Chart(myChart2,{

        type: "pie",
  data: {
    labels: ['A','B','C','D','E','F'],
    datasets: [{
      backgroundColor: ['#c450e7',
      '#e228a7',
      '#e75078',
      '#3edfe5',
      '#50e7ad',
      '#e7a850'],
      data: [a,b,c,d,e,f]
    }]
  },
  options: {
    title: {
      display: true,
      text: "CATEGORY OF QUESTIONS"
    }
  }
    })

    

})

    });
    
});



$(document).ready(function(){

    $('button').click(function(){
        const name=$('#btn').val();
        const url="https://codeforces.com/api/user.status?handle="+name+"&from=1&count=1000000000";
$.getJSON(url,function(data){

    var a=0,w=0,r=0,c=0,s=0,m=0,t=0;
    const length=data.result.length;
    for(var i=0;i<length;i++)
    {
        if(data.result[i].verdict=="OK")a=a+1;
        if(data.result[i].verdict=="WRONG_ANSWER")w=w+1;

        if(data.result[i].verdict=="RUNTIME_ERROR")r=r+1;

        if(data.result[i].verdict=="COMPILATION_ERROR")c=c+1;

        if(data.result[i].verdict=="MEMORY_LIMIT_EXCEEDED")m=m+1;
        if(data.result[i].verdict=="TIME_LIMIT_EXCEEDED")t=t+1;
        if(data.result[i].verdict=="SKIPPED")s=s+1;




        
    }
    var myChart=document.getElementById("myChart").getContext('3d')

    var chart3=new Chart(myChart3,{

        type: "doughnut",
  data: {
    labels: ['AC','WA','CE','TLE','MLE','SK','RTE'],
    datasets: [{
      backgroundColor: ['#FF5733',
      '#900C3F',
      '#581845',
      '#C70039',
      '#FFC300',
      '#DAF7A6',
      '#FF3333'
    ],
      data: [a,w,c,t,m,s,r]
    }]
  },
  options: {
    title: {
      display: true,
      text: "VERDICTS OF "+ name
    }
  }
    })

    

})

    });
    
});


$(document).ready(function(){
  $('button').click(function(){
      const name=$('#btn').val();
      var url="https://codeforces.com/api/user.status?handle="+name+"&from=1&count=1000000000";
     // console.log(url);

      $.getJSON(url,function(data){
          
         console.log(data);
          
     
      const length=data.result.length;
      var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,ii=0,j=0,k=0;
      for(i=0;i<length;i++)
      {
          if(data.result[i].verdict=='OK')
          {

              if(data.result[i].problem.rating==800)a=a+1;
              else if(data.result[i].problem.rating==900)b=b+1;
              else if(data.result[i].problem.rating==1000)c=c+1;
              else if(data.result[i].problem.rating==1100)d=d+1;
              else if(data.result[i].problem.rating==1200)e=e+1;
              else if(data.result[i].problem.rating==1300)f=f+1;
              else if(data.result[i].problem.rating==1400)g=g+1;
              else if(data.result[i].problem.rating==1500)h=h+1;
              else if(data.result[i].problem.rating==1600)ii=ii+1;
              else if(data.result[i].problem.rating==1700)j=j+1;
              else if(data.result[i].problem.rating==1800)k=k+1;

              
          }
      }
    //  console.log(b);
      var myChart=document.getElementById("myChart").getContext('2d')

      var chart4 =new Chart(myChart4,{

          type:'bar',
          data:{
              labels: ['800', '900', '1000', '1100', '1200', '1300','1400','1500','1600','1700','1800'],
              datasets:[
                  {
                  label: "Category",
                  data:[a,b,c,d,e,f,g,h,ii,j,k],
                  backgroundColor: [
                      '#c450e7',
                      '#e228a7',
                      '#e75078',
                      '#3edfe5',
                      '#50e7ad',
                      '#e7a850',
                      '#FFC300',
                      '#DAF7A6',
                       '#FF3333',
                       '#900C3F',
                        '#581845'

                  ],
                 
                }
                
              ]
          },
      
      options:{
        title: {
          display: true,
          text: "PROBLEM RATINGS OF "+ name
        }
      }
      })

  });

  });
 

});