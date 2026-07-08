---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="text-align: center; margin-bottom: 20px;">
  <a href="{{ base_path }}/files/CV.pdf" class="btn btn--primary btn--large" download>
    <i class="fas fa-download"></i> Download CV (PDF)
  </a>
</div>

<div style="width: 100%; height: 1200px; border: 1px solid #ddd; margin-top: 20px;">
  <iframe src="{{ base_path }}/files/CV.pdf" width="100%" height="100%" style="border: none;">
    This browser does not support embedded PDF viewing.
    <a href="{{ base_path }}/files/CV.pdf">Click here to download the CV</a>.
  </iframe>
</div>  * GitHub University
  * Duties included: Tagging issues
  * Supervisor: Professor Git
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
