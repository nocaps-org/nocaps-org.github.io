---
layout: project
title: "nocaps"
permalink: "/"
description: Towards novel object captioning
---

<div class="row" style="margin-top:30px;">
  <div class="col-xs-12 col-sm-6">
    <h3 style="text-align: center;"><span style="font-family: Inconsolata;">nocaps: </span> novel object captioning at scale</h3>
    <p style="margin-top: 12px;">
      Image captioning models have achieved impressive results on datasets containing limited visual concepts and large amounts of paired image-caption training data. However, if these models are to ever function in the wild, a much larger variety of visual concepts must be learned, ideally from less supervision.
      To encourage the development of image captioning models that can learn visual concepts from alternative data modalities, such as object detection datasets, we present the first large-scale benchmark for this task. Dubbed <span style="font-family: Inconsolata;">nocaps</span>, for novel object captioning at scale, our benchmark consists of 166,100 human-generated captions describing 15,100 images from the Open Images validation and test sets. The associated training data consists of COCO image-caption pairs, plus Open Images image-level labels and object bounding boxes. Since Open Images contains many more classes than COCO, more than 500 object classes seen in test images have no training captions (hence, <span style="font-family: Inconsolata;">nocaps</span>).
        We evaluate several existing approaches to novel object captioning on our challenging benchmark. In quantitative evaluations these approaches show modest improvements over a strong baseline trained only on image-caption data. However, even when using ground-truth object detections, the results are significantly weaker than our human baseline -- indicating substantial room for improvement.
    </p>
  </div>
  <div class="col-xs-12 col-sm-6">
    <img src="/static/img/paper/teaser.jpg" style="margin-top: 37px;">
    <p style="font-size: 14px; text-align: center; margin-top: 10px;">
      The <span style="font-family: Inconsolata;">nocaps</span> benchmark  for  novel  object  captioning (at scale)
    </p>
  </div>
</div>
<!--   <div class="col-xs-12">
    <span style="color:#e74c3c;font-weight:400;">Sep 2018</span> — Winners of the Visual Dialog challenge 2018 announced! Complete leaderboard <a href="/challenge/2018#leaderboard">here</a>.<br>
    <span style="color:#e74c3c;font-weight:400;">Jun 2018</span> — <a href="/challenge/2018">Visual Dialog challenge 2018 announced</a> on the <a href="/data">VisDial v1.0 dataset</a>!<br>
    <span style="color:#e74c3c;font-weight:400;">Jun 2018</span> — <a href="//github.com/batra-mlp-lab/visdial-rl">PyTorch code for "Learning Cooperative Visual Dialog Agents with Deep Reinforcement Learning" is now available!</a><br>
    <span style="color:#e74c3c;font-weight:400;">Apr 2017</span> — <a href="//github.com/batra-mlp-lab/visdial">Torch code for training/evaluating Visual Dialog models</a>, <a href="https://github.com/batra-mlp-lab/visdial#download-extracted-features--pretrained-models">pretrained models</a> and <a href="http://demo.visualdialog.org">Visual Chatbot demo</a> are now available!<br>
    <span style="color:#e74c3c;font-weight:400;">Mar 2017</span> — <a href="/data">VisDial v0.9 dataset</a> and <a href="//github.com/batra-mlp-lab/visdial-amt-chat">code for real-time chat interface used to collect data on AMT</a> are now available!<br>
  </div>
</div> -->
<hr>


<!-- <div class="row">
  <div class="col-xs-12">
      <h2>Visual Chatbot demo</h2>
  </div>
  <a name="demo"></a>
  <div class="col-xs-12">
    <p class="text-center" id="demo-embed">
      <iframe src="https://visualchatbot.cloudcv.org" width="400" height="640"></iframe>
    </p>
  </div>
</div> -->

<div class="row">
  <div class="col-xs-12 col-sm-6">
    <div style="height: 115px; padding-top: 45px;">
      <span style="font-weight:400; padding-top: 58px;">Email</span> — contact@nocaps.org
      <br>
      <br>
    </div>
  </div>
  <div class="col-sm-6">
    <form action="https://tinyletter.com/nocaps" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/nocaps', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <div class="form-group">
        <label class="control-label" for="tlemail">Subscribe for <span style="font-family: Inconsolata;">nocaps</span> release updates</label>
        <input class="form-control" type="text" name="email" id="tlemail" placeholder="Email address"/>
      </div>
      <input type="hidden" value="1" name="embed"/>
      <button class="btn btn-primary" type="submit">Subscribe</button>
    </form>
  </div>
</div>
<hr>

<!-- <a class="anchor" name="/bibtex"></a>
<div class="row">
    <div class="col-xs-12">
        <h3>nocaps</h3>
    </div>
    <div class="col-xs-12" style="margin-top: 3px; color: #666;">
        Harsh Aggarwal, Karan Desai, Xinlei Chen, Rishabh Jain, Dhruv Batra, Devi Parikh, Stefan Lee, Peter Anderson
    </div>
    <div class="col-xs-12" style="margin-top: 3px; color: #666;">
      CVPR 2017 (Spotlight) [<a href="bib/visdial.bib.txt">Bibtex</a>] [<a href="//arxiv.org/abs/1611.08669">PDF</a>] [<a href="//github.com/batra-mlp-lab/visdial">Code</a>]
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <a href="//arxiv.org/abs/1611.08669"><img class="thumb" src="/static/img/visdial/thumb.jpg"></a>
    </div>
</div>

<a name="/data"></a>
<hr>
 -->
<!-- {% if page.acknowledgements %}
<a class="anchor" name="/acknowledgements"></a>
<div class="row">
  <div class="col-xs-12">
    <h2>Acknowledgements</h2>
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
    <p>
      {{ page.acknowledgements }}
    </p>
  </div>
</div>
{% endif %} -->
