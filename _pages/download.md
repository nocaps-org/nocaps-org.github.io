---
layout: default
urltitle:  "Download · nocaps"
title: "Download · nocaps"
permalink: /download
---

<link rel="stylesheet" type="text/css" href="/static/css/download.css">

<div class="download-container row">
  <div class="col-md-12 col-sm-12 col-xs-12 col-12">
    <h2>nocaps v0.1</h2>
  </div>

  <!-- VALIDATON SET DETAILS AND DOWNLOAD LINKS -------------------------- -->
  <div class="col-md-6 col-sm-6 col-xs-12 col-12">
    <h4>Validation Set</h4>
    <ul class="split-details">
      <li>Sourced from Open Images validation set (v4).</li>
      <li>4500 images, 10 captions per image.</li>
      <ul class="split-details">
        <li>648 <span class="nocaps-word">in-domain</span> images.</li>
        <li>2938 <span class="nocaps-word">near-domain</span> images.</li>
        <li>914 <span class="nocaps-word">out-domain</span> images.</li>
      </ul>
    </ul>
    <br>
    <a class="button-div" href="https://s3.amazonaws.com/nocaps/nocaps_val_image_info.json" onClick="ga('send', 'event', { eventCategory: 'download', eventAction: 'click', eventLabel: 'nocaps.v0.1.val', eventValue: 0});">
    Download Validation Set Image Info
    </a>
  </div>

  <!-- TEST SET DETAILS AND DOWNLOAD LINKS ------------------------------- -->
  <div class="col-md-6 col-sm-6 col-xs-12 col-12">
    <h4>Test Set</h4>
    <ul class="split-details">
      <li>Sourced from Open Images test set (v4).</li>
      <li>10600 images, 10 captions per image.</li>
      <ul class="split-details">
        <li>1311 <span class="nocaps-word">in-domain</span> images.</li>
        <li>7406 <span class="nocaps-word">near-domain</span> images.</li>
        <li>1883 <span class="nocaps-word">out-domain</span> images.</li>
      </ul>
    </ul>
    <br>
    <a class="button-div" href="https://s3.amazonaws.com/nocaps/nocaps_test_image_info.json" onClick="ga('send', 'event', { eventCategory: 'download', eventAction: 'click', eventLabel: 'nocaps.v0.1.test', eventValue: 0});">
    Download Test Set Image Info
    </a>
  </div>

</div>

<hr>

<!-- DATA FORMAT --------------------------------------------------------- -->
<div class="format-container row">
  <div class="col-md-12 col-sm-12 col-xs-12 col-12">
    <h2>Annotations Format</h2>
  </div>
  <div class="col-md-12 col-sm-12 col-xs-12 col-12">
    To discourage training on the validation set, both validation and test reference captions will be kept private. However, there is no limit to the number of validation set evaluations that can be performed through the evaluation server. Further, to better understand the data, a random selection of validation set examples can be found on the <a href="/explore">Explore</a> page. The image info files follow the COCO annotations format, and are compatible to read with <a href="//github.com/cocodataset/cocoapi" target="_blank">COCO API</a>. Their format (explained by an example) is as follows:
  </div>

  <div class="col-md-12 col-sm-12 col-xs-12 col-12">
    <pre><code>{
    "licenses": [],
    "info": {
        "url": "http://nocaps.org",
        "date_created": "2018/11/06",
        "version": "0.1",
        "description": "nocaps validation dataset",
        "contributor": "nocaps team",
        "year": 2018
    },
    "images": [
        {
            "id": 0,
            "open_images_id": "0013ea2087020901",
            "height": 1024,
            "width": 732,
            "coco_url": "https://requestor-proxy.figure-eight.com/figure_eight_datasets/open-images/validation/0013ea2087020901.jpg",
            "file_name": "0013ea2087020901.jpg",
            "license": 0,
            "date_captured": "2018-11-06 11:04:33"
        },
    ...
    ]
}</code></pre>
  </div>
</div>

<hr>

<h2 class="anchor" id="dataset">Evaluation Server</h2>
<div class="dataset-container row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <p> To facilitate evaluation and avoid exposing the novel object captions, we have also setup an evaluation server on EvalAI. Submission instructions and leaderboard are available here:</p>
    <button class="button-div"><a href="https://evalai.cloudcv.org/web/challenges/challenge-page/355/overview">Evaluation Server</a></button>
  </div>
</div>
