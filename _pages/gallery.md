---
layout: page
title: Gallery
permalink: /gallery/
description: |
    Welcome to my photography gallery! I will share some of my photos from time to time.
nav: true
nav_order: 5
display_categories: [Travel, Campus]
horizontal: false
---

<!-- pages/gallery.md -->
<div class="gallery">
{% if site.enable_gallery_categories and page.display_categories %}
  <!-- Display categorized gallery -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_gallery = site.gallery | where: "category", category %}
  {% assign sorted_gallery = categorized_gallery | sort: "importance" %}
  <!-- Generate cards for each gallery -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for gallery in sorted_gallery %}
      {% include gallery_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for gallery in sorted_gallery %}
      {% include gallery.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display gallery without categories -->

{% assign sorted_gallery = site.gallery | sort: "importance" %}

  <!-- Generate cards for each gallery -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for gallery in sorted_gallery %}
      {% include gallery_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for gallery in sorted_gallery %}
      {% include gallery.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
