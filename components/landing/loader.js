const Loader = () => {
  return(
    <>
    <div className="floatingCirclesG">
      <div className="f_circleG frotateG_01">
      </div>
      <div className="f_circleG frotateG_02">
      </div>
      <div className="f_circleG frotateG_03">
      </div>
      <div className="f_circleG frotateG_04">
      </div>
      <div className="f_circleG frotateG_05">
      </div>
      <div className="f_circleG frotateG_06">
      </div>
      <div className="f_circleG frotateG_07">
      </div>
      <div className="f_circleG frotateG_08">
      </div>
</div>

    <style jsx>{`
      .floatingCirclesG{
position:relative;
width:60px;
height:60px;
-moz-transform:scale(0.6);
-webkit-transform:scale(0.6);
-ms-transform:scale(0.6);
-o-transform:scale(0.6);
transform:scale(0.6);
}

.f_circleG{
position:absolute;
background-color:#FFFFFF;
height:11px;
width:11px;
-moz-border-radius:5px;
-moz-animation-name:f_fadeG;
-moz-animation-duration:1.04s;
-moz-animation-iteration-count:infinite;
-moz-animation-direction:normal;
-webkit-border-radius:5px;
-webkit-animation-name:f_fadeG;
-webkit-animation-duration:1.04s;
-webkit-animation-iteration-count:infinite;
-webkit-animation-direction:normal;
-ms-border-radius:5px;
-ms-animation-name:f_fadeG;
-ms-animation-duration:1.04s;
-ms-animation-iteration-count:infinite;
-ms-animation-direction:normal;
-o-border-radius:5px;
-o-animation-name:f_fadeG;
-o-animation-duration:1.04s;
-o-animation-iteration-count:infinite;
-o-animation-direction:normal;
border-radius:5px;
animation-name:f_fadeG;
animation-duration:1.04s;
animation-iteration-count:infinite;
animation-direction:normal;
}

.frotateG_01{
left:0;
top:25px;
-moz-animation-delay:0.39s;
-webkit-animation-delay:0.39s;
-ms-animation-delay:0.39s;
-o-animation-delay:0.39s;
animation-delay:0.39s;
}

.frotateG_02{
left:7px;
top:7px;
-moz-animation-delay:0.52s;
-webkit-animation-delay:0.52s;
-ms-animation-delay:0.52s;
-o-animation-delay:0.52s;
animation-delay:0.52s;
}

.frotateG_03{
left:25px;
top:0;
-moz-animation-delay:0.65s;
-webkit-animation-delay:0.65s;
-ms-animation-delay:0.65s;
-o-animation-delay:0.65s;
animation-delay:0.65s;
}

.frotateG_04{
right:7px;
top:7px;
-moz-animation-delay:0.78s;
-webkit-animation-delay:0.78s;
-ms-animation-delay:0.78s;
-o-animation-delay:0.78s;
animation-delay:0.78s;
}

.frotateG_05{
right:0;
top:25px;
-moz-animation-delay:0.91s;
-webkit-animation-delay:0.91s;
-ms-animation-delay:0.91s;
-o-animation-delay:0.91s;
animation-delay:0.91s;
}

.frotateG_06{
right:7px;
bottom:7px;
-moz-animation-delay:1.04s;
-webkit-animation-delay:1.04s;
-ms-animation-delay:1.04s;
-o-animation-delay:1.04s;
animation-delay:1.04s;
}

.frotateG_07{
left:25px;
bottom:0;
-moz-animation-delay:1.17s;
-webkit-animation-delay:1.17s;
-ms-animation-delay:1.17s;
-o-animation-delay:1.17s;
animation-delay:1.17s;
}

.frotateG_08{
left:7px;
bottom:7px;
-moz-animation-delay:1.3s;
-webkit-animation-delay:1.3s;
-ms-animation-delay:1.3s;
-o-animation-delay:1.3s;
animation-delay:1.3s;
}

@-moz-keyframes f_fadeG{
0%{
background-color:#FF662E}

100%{
background-color:#FFFFFF}

}

@-webkit-keyframes f_fadeG{
0%{
background-color:#FF662E}

100%{
background-color:#FFFFFF}

}

@-ms-keyframes f_fadeG{
0%{
background-color:#FF662E}

100%{
background-color:#FFFFFF}

}

@-o-keyframes f_fadeG{
0%{
background-color:#FF662E}

100%{
background-color:#FFFFFF}

}

@keyframes f_fadeG{
0%{
background-color:#FF662E}

100%{
background-color:#FFFFFF}

}

      `}</style>
    </>
  )
}

export default Loader;
