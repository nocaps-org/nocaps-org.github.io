---
layout: default
permalink: "/"
---

<div class="container">
  <div class="row">
    <!-- Teaser figure -->
    <div class="col-md-6 col-sm-6 col-xs-12">
      <img alt="{{ site.title }}" title="{{ site.title }}" id="teaser-figure" src="/static/img/paper/teaser.jpg">
      <p id="teaser-caption">
        The <span class="nocaps-word">nocaps</span> benchmark for novel object captioning (at scale).
      </p>
    </div>
    <!-- Abstract -->
    <div class="col-md-6 col-sm-6 col-xs-12">
      <p>
        Image captioning models have achieved impressive results on datasets containing limited visual concepts and large amounts of paired image-caption training data. However, if these models are to ever function in the wild, a much larger variety of visual concepts must be learned, ideally from less supervision.
        To encourage the development of image captioning models that can learn visual concepts from alternative data modalities, such as object detection datasets, we present the first large-scale benchmark for this task. Dubbed <span class="nocaps-word">nocaps</span>, for novel object captioning at scale, our benchmark consists of 166,100 human-generated captions describing 15,100 images from the Open Images validation and test sets. The associated training data consists of COCO image-caption pairs, plus Open Images image-level labels and object bounding boxes. Since Open Images contains many more classes than COCO, more than 500 object classes seen in test images have no training captions (hence, <span class="nocaps-word">nocaps</span>). We evaluate several existing approaches to novel object captioning on our benchmark. In quantitative evaluations these approaches show modest improvements over a strong baseline trained only on image-caption data. However, even when using ground-truth object detections, the results are significantly weaker than our human baseline — indicating substantial room for improvement.
      </p>
    </div>
  </div>
</div>

<hr>

<h2>People</h2>

<div class="people-container">
{% include people.html %}
</div>

<hr>

<div class="row">
  <!-- Subscribe -->
  <div class="col-md-6 col-sm-6 col-xs-12">
    <h3>Subscribe</h3>
    <form action="https://tinyletter.com/nocaps" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/nocaps', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <label for="tlemail">Subscribe for <span class="nocaps-word">nocaps</span> release updates</label>
      <div class="row">
        <div class="col-md-8 col-sm-8 col-xs-8" style="margin: 10px 0 10px 0">
          <input type="text" name="email" id="tlemail" placeholder="Email address" style="width: 100%"/>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-4" style="margin: 10px 0 10px 0">
          <button type="submit">Subscribe!</button>
        </div>
      </div>
    </form>
  </div>

  <!-- Contact -->
  <div class="col-md-6 col-sm-6 col-xs-12">
    <h3>Contact</h3>
    <span><b>Email:</b> contact@nocaps.org</span>
  </div>
</div>

<br/>
