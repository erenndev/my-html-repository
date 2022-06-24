/* Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

/* This file is dynamically processed by a C++ data source handler to fill in
 * some per-platform/locale styles that dramatically alter the page. This is
 * done to reduce flicker, as JS may not run before the page is rendered.
 *
 * There are two ways to include this stylesheet:
 * 1. via its chrome://resources/ URL in HTML, i.e.:
 *
 *   <link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css">
 *
 * 2. via the webui::AppendWebUICSSTextDefaultsMd() method to directly append it
 * to an HTML string.
 * Otherwise its placeholders won't be expanded. */

@import url(chrome://resources/css/roboto.css);

body {
  font-family: Roboto, 'Segoe UI', Tahoma, sans-serif;
  font-size: 81.25%;
}

button {
  font-family: Roboto, 'Segoe UI', Tahoma, sans-serif;
}
