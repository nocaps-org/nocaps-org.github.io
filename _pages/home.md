---
layout: project
urltitle:  "nocaps"
title: "nocaps"
permalink: "/"
bibtex: true
paper: true
---

<div class="row" style="margin-top:30px;">
  <div class="col-xs-12 col-sm-7">
    <h3>What is Visual Dialog?</h3>
    <p>
      Visual Dialog is a novel task that requires an AI agent to hold a meaningful dialog with humans in natural, conversational language about visual content.
      Specifically, given an image, a dialog history, and a follow-up question about the image, the agent has to answer the question.
    </p>
  </div>
  <ul style="margin:0 10px 10px;" class="col-xs-12 col-sm-4"><a href="#visdial">VisDial dataset</a>:
    <li>
      120k images from <a href="http://mscoco.org">COCO</a>
    </li>
    <li>
      1 dialog / image
    </li>
    <li>
      10 rounds of question-answers / dialog
    </li>
    <li>
      Total 1.2M dialog question-answers
    </li>
  </ul>
  <div class="col-xs-12">
    <span style="color:#e74c3c;font-weight:400;">Sep 2018</span> — Winners of the Visual Dialog challenge 2018 announced! Complete leaderboard <a href="/challenge/2018#leaderboard">here</a>.<br>
    <span style="color:#e74c3c;font-weight:400;">Jun 2018</span> — <a href="/challenge/2018">Visual Dialog challenge 2018 announced</a> on the <a href="/data">VisDial v1.0 dataset</a>!<br>
    <span style="color:#e74c3c;font-weight:400;">Jun 2018</span> — <a href="//github.com/batra-mlp-lab/visdial-rl">PyTorch code for "Learning Cooperative Visual Dialog Agents with Deep Reinforcement Learning" is now available!</a><br>
    <span style="color:#e74c3c;font-weight:400;">Apr 2017</span> — <a href="//github.com/batra-mlp-lab/visdial">Torch code for training/evaluating Visual Dialog models</a>, <a href="https://github.com/batra-mlp-lab/visdial#download-extracted-features--pretrained-models">pretrained models</a> and <a href="http://demo.visualdialog.org">Visual Chatbot demo</a> are now available!<br>
    <span style="color:#e74c3c;font-weight:400;">Mar 2017</span> — <a href="/data">VisDial v0.9 dataset</a> and <a href="//github.com/batra-mlp-lab/visdial-amt-chat">code for real-time chat interface used to collect data on AMT</a> are now available!<br>
  </div>
</div>
<hr>

<div class="row">
  <div class="col-xs-12">
      <h2>Visual Chatbot demo</h2>
  </div>
  <a name="demo"></a>
  <div class="col-xs-12">
    <p class="text-center" id="demo-embed">
      <iframe src="https://visualchatbot.cloudcv.org" width="400" height="640"></iframe>
    </p>
  </div>
</div>
<hr>

<div class="row">
  <div class="col-sm-6">
    <span style="font-weight:400;">Email</span> — contact@visualdialog.org
    <br>
    <br>
  </div>
  <div class="col-sm-6">
    <form action="https://tinyletter.com/visualdialog" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/visualdialog', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <div class="form-group">
        <label class="control-label" for="tlemail">Subscribe for Visual Dialog release updates</label>
        <input class="form-control" type="text" name="email" id="tlemail" placeholder="Email address"/>
      </div>
      <input type="hidden" value="1" name="embed"/>
      <button class="btn btn-primary" type="submit">Subscribe</button>
    </form>
  </div>
</div>
<hr>

<a class="anchor" name="/bibtex"></a>
<div class="row">
    <div class="col-xs-12">
        <h3>Visual Dialog</h3>
    </div>
    <div class="col-xs-12" style="margin-top: 3px; color: #666;">
        Abhishek Das, Satwik Kottur, Khushi Gupta, Avi Singh, Deshraj Yadav, José M. F. Moura, Devi Parikh and Dhruv Batra
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

{% if page.acknowledgements %}
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
{% endif %}
