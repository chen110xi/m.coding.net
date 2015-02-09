(function(){var a,b,c=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},d=[].slice;window.Routy||(window.Routy={}),a=window.History,b={},Routy.Router=function(){function a(a,b,c,d){this.state_changers_selector=b,this.event=d,a||(a=""),""!==a&&("/"===a[0]&&(a=a.substr(1)),"/"===a.substr(-1)&&(a=a.substr(0,a.length-1))),this.context=a,this.state_changers_selector||(this.state_changers_selector="a"),c||(c=document),this.context_selector=$(c),this.event||(this.event="click"),this.attach()}return a.prototype.actions=[],a.prototype["default"]=null,a.prototype.apply_context=function(a){return a=""!==a?"/"!==a[0]?this.context+a:this.context+a:this.context+"/"},a.prototype.attach=function(){var a;return a=this,$(window).load(function(){return a.run.call(a,"/")}),this.context_selector.on(this.event,this.state_changers_selector,function(b){var c;return b.preventDefault(),c=$(this).attr("href")||$(this).children("a").attr("href"),null!=c?a.run.call(a,c,b.type):void 0}),$(window).bind("popstate",function(b){return a.run.call(a,b.state.state)})},a.prototype.go=function(a,b,c){var d;return d=c||{},d.state=a,window.history.pushState(d,b||document.title,a)},a.prototype.register=function(a,b){var c,d,e,f,g,h,i,j;return j=b.template_url,g=b.events||this.event.split(" "),e=b.context,d=b.before_enter,f=b.on_enter,c=b.after_enter,h=b.on_exit,i=new Routy.Action(a,j,g,$(e),this,d,f,c,h),b["default"]&&(this["default"]=a),this.actions.push(i)},a.prototype.rootRegister=function(a,b){return this.register("",a,b)},a.prototype.run=function(a,b){var d,e,f,g,h,i,j,k,l,m;for(l=this.actions,h=0,j=l.length;j>h;h++)if(d=l[h],!b||b&&c.call(d.events,b)>=0)for(m=d.route,i=0,k=m.length;k>i;i++)if(g=m[i],f=this.pathRegExp(g,{}).regexp,e=a.match(f),null!=e)return this.go(a),e.shift(),d.call.apply(d,e);return this["default"]?this.run(this["default"]):void 0},a.prototype.pathRegExp=function(a,b){var c,d,e;return c=b.caseInsensitiveMatch,e={originalPath:a,regexp:a},d=e.keys=[],a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,b,c,e){var f,g;return f="?"===e?e:null,g="*"===e?e:null,d.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),e.regexp=new RegExp("^"+a+"$",c?"i":""),e},a}(),Routy.Action=function(){function a(a,b,c,d,e,f,g,h,i){var j,k,l,m;for(this.template_url=b,this.events=c,this.context=d,this.router=e,this.before_callback=f,this.callback=g,this.after_callback=h,this.on_exit_callback=i,"string"==typeof a&&(a=a.split(", ")),j=[],this.events=this.events||[],l=0,m=a.length;m>l;l++)k=a[l],k=this.router.apply_context(k),j.push(k);this.route=j}return a.prototype.route=[],a.prototype.context=$("body"),a.prototype.template_url=null,a.prototype.template=null,a.prototype.callback=null,a.prototype.before_callback=null,a.prototype.after_callback=null,a.prototype.condition=null,a.prototype.on_exit_callback=null,a.prototype.events=[],a.prototype.call=function(){var a,b,c=this;return a=1<=arguments.length?d.call(arguments,0):[],b=!0,this.condition&&(b=this.condition.apply(this,a)),this.template?this.digest(a):$.get(this.template_url,function(b){return c.template=b,c.digest(a)})},a.prototype.digest=function(a){return null!=b.on_exit_callback&&b.on_exit_callback.apply(this,a),this.before_callback&&this.before_callback.apply(this,a),this.context.html(this.template),this.callback.apply(this,a),this.after_callback&&this.after_callback.apply(this,a),b=this},a}()}).call(this);var PROJECT_BLOB_ROUTE=function(){function a(){var a="/api/user/"+e+"/project/"+f+"/git/blob/"+g+"/"+h;$.ajax({url:API_DOMAIN+a,dataType:"json",success:function(a){a.data?(d=a.data,b(d)):alert("Failed to load commits")},error:function(){alert("Failed to load commits")},complete:function(){$("div.loading").remove()}})}function b(a){var b=a.file;if("file"===b.mode){var d=c(b.data),h=b.lang,i=hljs.getLanguage(h)?hljs.highlight(h,d):hljs.highlightAuto(d);$("code.hljs").html(i.value)}else{var j=b.path,k=API_DOMAIN+"/u/"+e+"/p/"+f+"/git/raw/"+g+"/"+j;$("pre").replaceWith('<div class="text-center"><img width="300" src='+k+"></div>")}}function c(a){var b={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'};return a.replace(/&(lt|gt|nbsp|amp|quot);/gi,function(a,c){return b[c]})}var d,e,f,g,h;return{template_url:"/views/project_blob.html",context:".container",before_enter:function(a,b){var c="/u/"+a+"/p/"+b;$("title").text(a+"/"+b);var d='<nav class="project_navbar navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#"><img alt="left" src="/images/static/left_arrow.png" height="20" width="20"></a><span class="text-center"></span></div></div></nav>',e='<div class="row project_header"><div class="col-xs-3"><a href="#">项目主页</a></div><div class="col-xs-3"><a href="#">阅读代码</a></div><div class="col-xs-3"><a href="#">合并请求</a></div><div class="col-xs-3"><a href="#">项目讨论</a></div></div>',f=$(d),g=$(e);f.find("a.navbar-brand").attr("href",router["default"]),f.find("span").text(b),g.find("div").eq(0).children("a").attr("href",c+"/git"),g.find("div").eq(1).children("a").attr("href",c+"/tree"),g.find("div").eq(1).children("a").addClass("active"),$("nav.main-navbar").after(f),f.after(g)},on_enter:function(b,c,d,i){e=b,f=c,g=d||"master",h=(i||"").replace(/%2F/g,"/"),a()},on_exit:function(){$("title").text(""),$("#navigator").find("li").removeClass("active"),$(".project_navbar").remove(),$(".project_header").remove()}}}(),PROJECT_TREE_ROUTE=function(){function a(){var a="/api/user/"+f+"/project/"+g+"/git/treeinfo/"+h+"/"+i;$.ajax({url:API_DOMAIN+a,dataType:"json",success:function(a){a.data?(e=a.data,b(e)):alert("Failed to load commits")},error:function(){alert("Failed to load commits")},complete:function(){$("div.loading").remove()}})}function b(a){for(var b=a.infos,d=null,e=null,f=0;f<b.length;f++)d=b[f],e=c(d),$("#project_code > .list-group").append(e)}function c(a){var b='<li class="list-group-item list-group-item-info project_item"><img src="#" height="25" width="23" ><span class="item_name"></span><a href="#" class="item_arrow pull-right glyphicon glyphicon-chevron-right"></a><span class="clearfix"></span><span class="item_note"></span></li>',c=$(b),e="tree"===a.mode?"/u/"+f+"/p/"+g+"/tree/"+h+"/"+a.path.replace(/\//g,"%2F"):"/u/"+f+"/p/"+g+"/blob/"+h+"/"+a.path.replace(/\//g,"%2F"),i="tree"===a.mode?"/images/static/folder.png":"/images/static/file.png";return c.find("img").attr("src",i),c.find("span.item_name").text(d(a.name,25)),c.find("a.item_arrow").attr("href",e),c.find("span.item_note").text("n天前 "+a.lastCommitter.name),c}function d(a,b){return a.length<b?a:a.substr(0,b)+"..."}var e,f,g,h,i;return{template_url:"/views/project_tree.html",context:".container",before_enter:function(a,b){var c="/u/"+a+"/p/"+b;$("title").text(a+"/"+b);var d='<nav class="project_navbar navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#"><img alt="left" src="/images/static/left_arrow.png" height="20" width="20"></a><span class="text-center"></span></div></div></nav>',e='<div class="row project_header"><div class="col-xs-3"><a href="#">项目主页</a></div><div class="col-xs-3"><a href="#">阅读代码</a></div><div class="col-xs-3"><a href="#">合并请求</a></div><div class="col-xs-3"><a href="#">项目讨论</a></div></div>',f=$(d),g=$(e);f.find("a.navbar-brand").attr("href",router["default"]),f.find("span").text(b),g.find("div").eq(0).children("a").attr("href",c+"/git"),g.find("div").eq(1).children("a").attr("href",c+"/tree"),g.find("div").eq(1).children("a").addClass("active"),$("nav.main-navbar").after(f),f.after(g)},on_enter:function(b,c,d,e){f=b,g=c,h=d||"master",i=(e||"").replace(/%2F/g,"/"),a()},on_exit:function(){$("title").text(""),$("#navigator").find("li").removeClass("active"),$(".project_navbar").remove(),$(".project_header").remove()}}}(),PROJECT_ITEM_ROUTE=function(){function a(){var a="/api/user/"+g+"/project/"+h;$.ajax({url:API_DOMAIN+a,dataType:"json",success:function(a){a.data?(f=a.data,$("#project_readme").before(c(f))):alert("Failed to load project")},error:function(){alert("Failed to load project")}})}function b(){var a="/api/user/"+g+"/project/"+h+"/git/tree/master";$.ajax({url:API_DOMAIN+a,dataType:"json",success:function(a){if(a.data){var b=a.data.readme.preview;$("#readme_body > .panel-body").html(b)}else alert("Failed to load README file")},error:function(){alert("Failed to load README file")},complete:function(){$("span.loading").remove()}})}function c(a){var b='<div class="project_content row"><div class="col-xs-4"><img src="#" height="100" width="100"></div><div class="col-xs-8 description"><h4></h4><p></p><div><img src="#" height="20" width="20" /><span> 最后更新于 </span></div></div></div>',c=$(b);return c.find("img").eq(0).attr("src",d(a.icon)),c.find(".description h4").text(a.name),c.find(".description p").text(e(a.description,40)),c.find(".description img").attr("src",d(a.owner_user_picture)),c}function d(a){return"/"===a.substr(0,1)&&(a=API_DOMAIN+a),a}function e(a,b){return a.length<b?a:a.substr(0,b)+"..."}var f,g,h;return{template_url:"/views/project_item.html",events:["doubleTap","swipe"],context:".container",before_enter:function(a,b){var c="/u/"+a+"/p/"+b;$("title").text(a+"/"+b);var d='<nav class="project_navbar navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#"><img alt="left" src="/images/static/left_arrow.png" height="20" width="20"></a><span class="text-center"></span></div></div></nav>',e='<div class="row project_header"><div class="col-xs-3"><a href="#">项目主页</a></div><div class="col-xs-3"><a href="#">阅读代码</a></div><div class="col-xs-3"><a href="#">合并请求</a></div><div class="col-xs-3"><a href="#">项目讨论</a></div></div>',f=$(d),g=$(e);f.find("a.navbar-brand").attr("href",router["default"]),f.find("span").text(b),g.find("div").eq(0).children("a").attr("href",c+"/git"),g.find("div").eq(1).children("a").attr("href",c+"/tree"),g.find("div").eq(0).children("a").addClass("active"),$("nav.main-navbar").after(f),f.after(g)},on_enter:function(c,d){g=c,h=d,a(),b()},on_exit:function(){$("title").text(""),$("#navigator").find("li").removeClass("active"),$(".project_navbar").remove(),$(".project_header").remove()}}}(),PROJECT_ROUTE=function(){function a(a){var c,d,a=a||{},e=a.list,f=document.createDocumentFragment();i=document.getElementById("projects_list");for(var g=0;g<e.length;g++)c=e[g],d=b(c),f.appendChild(d[0]),j.push(c);i.appendChild(f)}function b(a){var b='<a href="#" class="list-group-item" style="height: 105px"><img class="pull-left project_icon" src="#" width="80" height="80"><span class="project_name"></span><br /><span class="project_description"></span><br /><div class="project_owner"><img src="#" height="15" width="14" /><span> 最后更新于 </span></div></a>',c=$(b);return c.attr("href",a.project_path),c.find("img.project_icon").attr("src",e(a.icon)),c.find("span.project_name").text(a.name),c.find("span.project_description").text(f(a.description,15)),c.find("div.project_owner > img").attr("src",e(a.owner_user_picture)),c.on("click tap",function(){$("#projects_list").find("a").removeClass("active"),c.addClass("active")}),c}function c(b){h++;var c=$("#load_more");c.html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> 读取中...'),b+="?page="+h+"&pageSize="+g,$.ajax({url:API_DOMAIN+b,dataType:"json",success:function(b){b.data?a(b.data):alert("Failed to load projects")},error:function(){alert("Failed to load projects")},complete:function(){c.text("更多项目")}})}function d(){for(var a,c=document.createDocumentFragment(),d=document.getElementById("projects_list"),e=0;e<j.length;e++)a=b(j[e]),c.appendChild(a[0]);d.appendChild(c)}function e(a){return"/"===a.substr(0,1)&&(a=API_DOMAIN+a),a}function f(a,b){return a.length<b?a:a.substr(0,b)+"..."}var g=10,h=0,i=null,j=[];return{template_url:"/views/project.html",context:".container",before_enter:function(){$("title").text("精彩项目"),$("#navigator").find("li:first").addClass("active")},on_enter:function(){0===j.length?c("/api/public/all"):d();var a=$("#load_more");a.on("click",function(a){a.preventDefault(),c("/api/public/all")})},on_exit:function(){$("title").text(""),$("#navigator").find("li").removeClass("active")},"default":!0}}(),PP_ROUTE=function(){function a(a){var c,d=a||{},e=document.createDocumentFragment();j=document.getElementById("pp_list");for(var f=0;f<d.length;f++)c=b(d[f]),e.appendChild(c[0]),k[d[f].id]=d[f];j.appendChild(e)}function b(a){var e='<div class="detailBox"><div class="titleBox"><div class="commenterImage"><a href="#"><img src="#" height="30" width="30" /></a></div><a class="commenterName" href="#"><label></label></a><a href="#" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></a><a href="#" class="pull-right star"><span class="glyphicon glyphicon-heart"></span></a><a href="#" class="pull-right comment"><span class="glyphicon glyphicon-comment"></span></a><div class="row"><div class="col-sm-12 like_users"></div></div></div><div class="commentBox"><p class="taskDescription"></p></div><div class="actionBox"><ul class="commentList"></ul><form class="form-inline commentSubmit" role="form"><div class="input-group"><input type="text" class="form-control" placeholder="在此输入评论内容"><span class="input-group-btn"><button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-arrow-right"></span></button></span></div></form></div></div>',f=$(e);f.attr("id",a.id);var g=a.owner.name,h=a.owner.global_key;f.find(".titleBox > .commenterImage > a").attr("href","/u/"+h),f.find(".titleBox > .commenterImage > a > img").attr("src",a.owner.avatar),f.find(".titleBox > a.commenterName").attr("href","/u/"+h),f.find(".titleBox > a.commenterName > label").text(g),f.find(".titleBox > a.star > span").text(a.likes),a.liked&&f.find(".titleBox > a.star > span").css("color","#D95C5C");for(var i,j=a.like_users,l=f.find(".titleBox .like_users"),m=0;m<j.length;m++)i=d(j[m]),l.append(i);f.find(".titleBox > a.comment").attr("href","/u/"+h+"/pp/"+a.id),f.find(".titleBox > a.comment > span").text(a.comments),f.find(".commentBox > .taskDescription").html(a.content);for(var n,o=a.comment_list,p=f.find(".actionBox > .commentList"),q=0;q<o.length;q++)n=c(o[q]),p.append(n);return f.on("click",".star",function(c){c.preventDefault();var d=a.id,e=a.liked?"/api/tweet/"+d+"/unlike":"/api/tweet/"+d+"/like";return $.post(API_DOMAIN+e,function(){a.liked=!a.liked,a.liked?a.likes+=1:a.likes-=1;var c=b(a);f.replaceWith(c),k[d]=a}),!1}),f.on("click",".close",function(b){b.preventDefault();var c=confirm("确认删除该泡泡？");if(c){var d=a.id,e="/api/tweet/"+d;$.ajax({url:API_DOMAIN+e,type:"DELETE",success:function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);else delete k[d],f.remove()}})}return!1}),f.on("submit",".commentSubmit",function(b){b.preventDefault();var d=a.id,e=$(this).find("input"),f=$(this).find("button"),g="/api/tweet/"+d+"/comment";return $.post(API_DOMAIN+g,{content:e.val()},function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);if(a.data){a.data.owner={};var d=c(a.data);p.append(d)}e.removeAttr("disabled"),f.removeAttr("disabled")}),e.attr("disabled","disabled"),f.attr("disabled","disabled"),!1}),f}function c(a){var b='<li><div class="commenterImage"><a href="#"><img src="#" /></a></div><a class="commenterName" href="#"><span class="comment-meta"></span></a><div class="commentText"><p></p><span class="date sub-text"></span><a class="reply" href="#" class="comment-hash"> 回复 </a><a class="delete" href="#" class="comment-hash"> 删除 </a></div></li>',c=$(b),d=a.owner.name,e=a.owner.global_key;return c.find(".commenterImage > a").attr("href","/u/"+e),c.find(".commenterImage img").attr("src",a.owner.avatar),c.find("a.commenterName").attr("href","/u/"+e),c.find("a.commenterName > span").text(d),c.find(".commentText > p").html(a.content),c.find(".commentText > .date").text(new Date(a.created_at)),c.find(".commentText > a").attr("id",a.owner_id),c.on("click",".reply",function(a){a.preventDefault();var b=c.parents(".commentList").next("form").find("input");if(""===b.val())b.val("@"+d);else{var e=b.val();b.val(e+", @"+d)}return!1}),c.on("click",".delete",function(b){b.preventDefault();var d=confirm("确认删除该评论？");if(d){var e=c.parents(".detailBox").attr("id"),f=a.id,g="/api/tweet/"+e+"/comment/"+f;$.ajax({url:API_DOMAIN+g,type:"DELETE",success:function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);else{for(var d=k[e].comment_list,g=d.length-1;g>=0;g--)d[g].id===f&&d.splice(g,1);c.remove()}}})}return!1}),c}function d(a){var b='<a class="pull-right" style="padding: 0 3px 0" href="#"><img src="#" height="15" width="15" /></a>',c=$(b);return c.attr("href","/u/"+a.global_key),c.find("img").attr("src",a.avatar),c}function e(){k={},h=99999999}function f(){k={},h=99999999,$("#pp_list > .detailBox").remove(),g("/api/tweet/public_tweets")}function g(b){var c=$("#load_more"),d=$("#refresh");c.html('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> 读取中...'),d.children("span").addClass("glyphicon-refresh-animate"),b+="?last_id="+h+"&sort="+i,$.ajax({url:API_DOMAIN+b,dataType:"json",success:function(b){b.data?(a(b.data),h=b.data[b.data.length-1].id):alert("Failed to load pp")},error:function(){alert("Failed to load pp")},complete:function(){c.text("更多泡泡"),d.children("span").removeClass("glyphicon-refresh-animate")}})}var h=99999999,i="time",j=null,k={};return{template_url:"/views/pp.html",context:".container",before_enter:function(a){$("title").text("冒泡"),$("#navigator").append('<li class="nav-divider"></li><li><a href="/pp/hot">热门</a></li>'),$('<div id="pp_actions" class="btn-group btn-group-justified" role="group" aria-label="..."><div class="btn-group" role="group"><a class="btn btn-default glyphicon glyphicon-edit" data-toggle="modal" data-target="#pp_input"> 来，冒个泡吧！ </a></div><div class="btn-group" role="group"><a class="btn btn-default glyphicon glyphicon glyphicon-camera"> 发图片 </a></div></div>').insertAfter($("#bs-example-navbar-collapse-1")),"hot"===a?$("#navigator").find("li:last-child").addClass("active"):$("#navigator").find("li:eq(1)").addClass("active")},on_enter:function(a){i="hot"===a?"hot":"time",f(),$("#load_more").on("click",function(a){a.preventDefault(),g("/api/tweet/public_tweets")}),$("#refresh").on("click",function(a){a.preventDefault(),f()}),$("#pp_input").on("click","#pp_submit",function(a){a.preventDefault();var c=$("#pp_content"),d=$(this);return""!==c.val()&&(d.attr("disabled","disabled"),$.post(API_DOMAIN+"/api/tweet",{content:c.val()},function(a){if(a.msg)for(var e in a.msg)alert(a.msg[e]);if(a.data){a.data.owner={};var f=b(a.data);j.prepend(f),c.val(""),$("#pp_input").modal("hide")}d.removeAttr("disabled")})),!1})},on_exit:function(){$("title").text(""),$("#navigator > li").slice(-2).remove(),$("#pp_actions").remove(),$("#navigator").find("li").removeClass("active"),e()}}}(),PP_ITEM_ROUTE=function(){function a(a){var b="/api/user/key/"+a;$.ajax({url:API_DOMAIN+b,dataType:"json",success:function(b){b.data?(h=b.data,c(h)):(alert("Failed to load user"+a),$("#user-heading").html(""))},error:function(){alert("Failed to load user"+a),$("#user-heading").html("")}})}function b(a,b){var c="/api/tweet/"+a+"/"+b;$.ajax({url:API_DOMAIN+c,dateType:"json",success:function(a){a.data?(g=a.data,d(g)):alert("Failed to load pp"+b)},error:function(){alert("Failed to load pp"+b)},complete:function(){$("button.btn-warning").remove()}})}function c(a){var b=a||{},d='<h4 class="panel-title"><img src="#" height="25" width="25" /><a class="panel-title" data-toggle="collapse" href="#accordion" data-target="#user-details" aria-expanded="true" aria-controls="user-details"></a><a href="#" class="pull-right watched"></a><a href="#" class="pull-right followed"></a></h4>',e='<p><span class="description" ></span></p><p><button type="button" class="btn btn-primary follow"></button><button type="button" class="btn btn-default message">给TA私信</button></p><table class="table"><tr class="join"><td>加入时间</td><td></td></tr><tr class="activity"><td>最后活动</td><td></td></tr><tr class="sufix"><td>个性后缀</td><td></td></tr></table>',f=$(d),g=$(e);f.find("img").attr("src",b.avatar),f.find("a.panel-title").text(" "+b.name+" "),f.find("a.watched").attr("href","/u/"+b.global_key+"/followers").text(" "+b.fans_count+"粉丝 "),f.find("a.followed").attr("href","/u/"+b.global_key+"/friends").text(" "+b.follows_count+"关注 "),f.click(function(a){a.preventDefault();var b=$("#user-details");return b.collapse(b.hasClass("in")?"hide":"show"),!1});var h=g.find("button.follow");if(h.text(b.followed?"取消关注":"关注"),g.find(".description").text(b.slogan),g.find("table .join td:eq(1)").text(new Date(b.created_at)),g.find("table .activity td:eq(1)").text(new Date(b.last_activity_at)),g.find("table .sufix td:eq(1)").text(b.global_key),""!==b.sex){var i=0===b.sex?"男":"女";g.find("table tbody").append('<tr class="sex"><td>性别</td><td>'+i+"</td></tr>")}if(""!==b.job_str&&g.find("table tbody").append('<tr class="job"><td>工作</td><td>'+b.job_str+"</td></tr>"),""!==b.location&&g.find("table tbody").append('<tr class="location"><td>地点</td><td>'+b.location+"</td></tr>"),""!==b.tags_str){for(var j=b.tags_str.split(","),k=[],l=0;l<j.length;l++){var m=j[l],n='<a href="/tags/search/'+m+'">'+m+"</a>";k.push(n)}g.find("table tbody").append('<tr class="tags"><td>标签</td><td>'+k.join()+"</td></tr>")}g.on("click","button.follow",function(a){a.preventDefault(),h.attr("disabled","disabled");var d=b.followed?"/api/user/unfollow":"/api/user/follow";$.post(API_DOMAIN+d+"?users="+b.global_key,function(a){if(a.msg)for(var d in a.msg)alert(a.msg[d]);else b.followed=!b.followed,b.follows_count=b.followed?b.follows_count+1:b.follows_count-1,c(b);h.removeAttr("disabled")})}),$("#user-details > .panel-body").html(g),$("#user-heading").html(f)}function d(a){var b=a||{},c='<div class="detailBox"><div class="titleBox"><div class="commenterImage"><a href="#"><img src="#" height="30" width="30" /></a></div><a class="commenterName" href="#"><label></label></a><a href="#" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></a><a href="#" class="pull-right star"><span class="glyphicon glyphicon-heart"></span></a><a href="#" class="pull-right comment"><span class="glyphicon glyphicon-comment"></span></a><div class="row"><div class="col-sm-12 like_users"></div></div></div><div class="commentBox"><p class="taskDescription"></p></div><div class="actionBox"><ul class="commentList"></ul><form class="form-inline commentSubmit" role="form"><div class="input-group"><input type="text" class="form-control" placeholder="在此输入评论内容"><span class="input-group-btn"><button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-arrow-right"></span></button></span></div></form></div></div>',h=$(c);h.attr("id",b.id);var i=b.owner.name,j=b.owner.global_key;h.find(".titleBox > .commenterImage > a").attr("href","/u/"+j),h.find(".titleBox > .commenterImage > a > img").attr("src",b.owner.avatar),h.find(".titleBox > a.commenterName").attr("href","/u/"+j),h.find(".titleBox > a.commenterName > label").text(i),h.find(".titleBox > a.star > span").text(b.likes),b.liked&&h.find(".titleBox > a.star > span").css("color","#D95C5C");for(var k,l=b.like_users,m=h.find(".titleBox .like_users"),n=0;n<l.length;n++)k=f(l[n]),m.append(k);h.find(".titleBox > a.comment").attr("href","/u/"+j+"/pp/"+b.id),h.find(".titleBox > a.comment > span").text(b.comments),h.find(".commentBox > .taskDescription").html(b.content);for(var o,p=b.comment_list,q=h.find(".actionBox > .commentList"),r=0;r<p.length;r++)o=e(p[r]),q.append(o);h.on("click",".star",function(a){a.preventDefault();var c=b.id,e=b.liked?"/api/tweet/"+c+"/unlike":"/api/tweet/"+c+"/like";return $.post(API_DOMAIN+e,function(){b.liked=!b.liked,b.liked?b.likes+=1:b.likes-=1,d(b),g=b}),!1}),h.on("click",".close",function(a){a.preventDefault();var c=confirm("确认删除该泡泡？");if(c){var d=b.id,e="/api/tweet/"+d;$.ajax({url:API_DOMAIN+e,type:"DELETE",success:function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);else h.remove()}})}return!1}),h.on("submit",".commentSubmit",function(a){a.preventDefault();var c=b.id,d=$(this).find("input"),f=$(this).find("button"),g="/api/tweet/"+c+"/comment";return $.post(API_DOMAIN+g,{content:d.val()},function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);if(a.data){a.data.owner={};var c=e(a.data);q.append(c)}d.removeAttr("disabled"),f.removeAttr("disabled")}),d.attr("disabled","disabled"),f.attr("disabled","disabled"),!1}),$("#accordion").after(h)}function e(a){var b='<li><div class="commenterImage"><a href="#"><img src="#" /></a></div><a class="commenterName" href="#"><span class="comment-meta"></span></a><div class="commentText"><p></p><span class="date sub-text"></span><a class="reply" href="#" class="comment-hash"> 回复 </a><a class="delete" href="#" class="comment-hash"> 删除 </a></div></li>',c=$(b),d=a.owner.name,e=a.owner.global_key;return c.find(".commenterImage > a").attr("href","/u/"+e),c.find(".commenterImage img").attr("src",a.owner.avatar),c.find("a.commenterName").attr("href","/u/"+e),c.find("a.commenterName > span").text(d),c.find(".commentText > p").html(a.content),c.find(".commentText > .date").text(new Date(a.created_at)),c.find(".commentText > a").attr("id",a.owner_id),c.on("click",".reply",function(a){a.preventDefault();var b=c.parents(".commentList").next("form").find("input");if(""===b.val())b.val("@"+d);else{var e=b.val();b.val(e+", @"+d)}return!1}),c.on("click",".delete",function(b){b.preventDefault();var d=confirm("确认删除该评论？");if(d){var e=c.parents(".detailBox").attr("id"),f=a.id,h="/api/tweet/"+e+"/comment/"+f;$.ajax({url:API_DOMAIN+h,type:"DELETE",success:function(a){if(a.msg)for(var b in a.msg)alert(a.msg[b]);else{for(var d=g.comment_list,e=d.length-1;e>=0;e--)d[e].id===f&&d.splice(e,1);c.remove()}}})}return!1}),c}function f(a){var b='<a class="pull-right" style="padding: 0 3px 0" href="#"><img src="#" height="15" width="15" /></a>',c=$(b);return c.attr("href","/u/"+a.global_key),c.find("img").attr("src",a.avatar),c}var g,h;return{template_url:"/views/pp_item.html",context:".container",before_enter:function(a){$("title").text(a+"的冒泡"),$("#navigator").append('<li class="nav-divider"></li><li><a href="/pp/hot">热门</a></li>')},on_enter:function(c,d){a(c),b(c,d)},on_exit:function(){$("title").text(""),$("#navigator > li").slice(-2).remove()}}}();!function(a,b,c,d,e,f){$(function(){FastClick.attach(document.body),$("button.navbar-toggle").click(function(){var a=$(this).data("target"),b=$(this).data("status");$(a).hasClass("collapsing")||("open"===b?($(a).collapse("hide"),$(this).find("img.up").hide(),$(this).find("img.down").show(),$(this).data("status","closed")):($(a).collapse("show"),$(this).find("img.up").show(),$(this).find("img.down").hide(),$(this).data("status","open")))}),$("div.container").on("click tap swipe",function(){var a=$("div.navbar-collapse"),b=$("button.navbar-toggle");a.hasClass("collapsing")||"open"!==b.data("status")||(a.collapse("hide"),b.find("img.up").hide(),b.find("img.down").show(),b.data("status","closed"))}),window.router=new Routy.Router(null,"a",".main","click doubleTap swipe"),router.register("/projects",a),router.register("/u/:user/p/:project, /u/:user/p/:project/git",b),router.register("/u/:user/p/:project/tree, /u/:user/p/:project/tree/:commit/:path",c),router.register("/u/:user/p/:project/blob/:commit/:path",d),router.register("/pp",e),router.register("/pp/:hot",e),router.register("/u/:user/pp/:pp",f)})}(PROJECT_ROUTE,PROJECT_ITEM_ROUTE,PROJECT_TREE_ROUTE,PROJECT_BLOB_ROUTE,PP_ROUTE,PP_ITEM_ROUTE);