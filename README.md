<img src="https://cdn.discordapp.com/attachments/799876599372840964/842841023604719617/bluenote.png" width="75px"><img src="https://cdn.discordapp.com/attachments/799876599372840964/842840330809507870/logo.png"><img src="https://cdn.discordapp.com/attachments/799876599372840964/842447775345410088/rednote.png" width="75px">
<hr>

## A Beat Saber song charting tool

### Created by KirbyPaint
<a href="https://www.linkedin.com/in/ash-porter-kirbypaint/">Find Me on LinkedIn</a> | 
<a href="mailto:porter.ashley13@gmail.com">Contact Me Directly</a>

<hr>

## <u>Table of Contents</u>
* <a href="#what-is-beat-maker">What is Beat Maker</a>
* <a href="#how-to-use-beat-maker">How To Use Beat Maker</a>
* <a href="#what-can-this-tool-do">What Can This Tool Do</a>
* <a href="#what-requires-outside-tools">What Requires Outside Tools</a>
* <a href="#how-do-i-make-a-good-beat-saber-chart">How Do I Make A Good Beat Saber Chart</a>
* <a href="#how-can-i-add-this-chart-data-to-my-beat-saber-game">How Can I Add This Chart Data To MY Beat Saber Game</a>
* <a href="#author-recommended-editing-tools">Author Recommended Editing Tools</a>
* <a href="#resources">Resources</a>
* <a href="#bugs-and-issues">Bugs and Issues</a>
* <a href="#technologies-used">Technologies Used</a>

<hr>

## What is Beat Maker
Beat Maker is a browser application in development. The goal of this project is for a user to be able to create their own Beat Saber song charts using minimal outside resources.

<hr>

## How To Use Beat Maker
<img src="https://media.discordapp.net/attachments/799876599372840964/844827752140898304/unknown.png?width=1343&height=676" width="100%">  
The Beat Maker screen has a few different and notable sections to it.  
From left to right, top to bottom:  

<u>Note Grid</u>: This is a 3-row-4-column grid of clickable black boxes that represents Beat Saber's note grid. Clicking a box will highlight the chosen block, and attributes can then be added to this note, that will then be later exported into a note.  

<u>Beat</u>: This determines which beat the note(s) will render on.  

<u>Tool Grid</u>: This grid contains six different tools. In order, from left to right, top to bottom:  
*  Slash Angle: This will determine what angle the note needs to be slashed at, or if the center dot button is chosen, it will assign the omni-angle attribute to that note block.
*  Bomb: Currently unimplemented.
*  Red Block: Assigns the selected note to be a red block.
*  Blue Block: Assigns the selected note to be a blue block.
*  Save Block: Exports the current chart into usable game code.
*  Delete Block: Clicking this block while a block on the chart is highlighted green will clear all attributes from the selected block only.  

<u>Attributes List</u>: This list determines certain in-game attributes, including the title of the track, author, BPM, etc. <a href="https://bsmg.wiki/mapping/map-format.html#info-dat">See this list for all attributes and required details</a>. Most attributes will allow any input; however note that if the input requires a time, please input a number, or the info.dat file will fail to load in the game. Additionally, some sections are listed as a drop-down only, to prevent an invalid input.    

<u>Export Info.dat To Text</u>: This button takes the data listed in the Attributes panel and prepares it for exporting.  

<u>Download Info File (As .dat)</u>: This button will bring up a prompt to the user, allowing the info.dat file to be saved locally to the computer.  

<u>Convert Current Beat Chart To Notes</u>: This button functions the same as the Save Block above.  

<u>Download Chart File (As .dat)</u>: This button will take all given notes saved so far and export them to a .dat file that can then, with minimal adjustment, be imported into the game. Same functionality as the Save Block button.  

<u>Export Data Box</u>: A box that displays the current note chart as its raw data. This is a preview for what will be downloaded using the "Download Chart File (As .dat) button.  

<hr>

## What Can This Tool Do
This tool can convert a given beat with red and blue notes into a basic playable chart file. It can also take the supplied attributes and create the required info.dat file containing the supplied attributes.

<hr>

## What Requires Outside Tools
This tool will not be able to edit audio files, create custom cover art, add events such as lighting, bombs, or walls, or package the final product. It is simply a chart creation tool.  

<hr>

## How Do I Make A Good Beat Saber Chart
Practice, practice, practice! Beat Saber charting, while simplistic, does have a bit of a learning curve, especially since creating the chart in a 2D medium doesn't always translate perfectly to a VR game. You may think that your chart map looks great, only to find that playing it is a nightmare. These charts require lots of minute tweaking and playtesting, and often it's best to have a buddy playtest the chart for you, to get past your own chart blindness.  
The <a href="https://bsmg.wiki/mapping/#mapping-quick-start">BSMG Wiki</a> has lots of helpful tools to get you started.

<hr>

## How Can I Add This Chart Data To MY Beat Saber Game
There are plenty of resources out there to assist with packaging the final product. In short, a Beat Saber track MUST have:  
*  info.dat
*  song.ogg OR song.egg
*  cover.jpg
*  Chart data, as listed in the info.dat file

These are the MINIMUM required files.  
Additionally, as of this writing, adding custom charts is not natively supported. You will need to mod your game, and as modding does come with certain inherent risks, I will not endorse a specific mod over another. However, a simple internet search will present a few good options.  

<hr>

## Author Recommended Editing Tools
*  <a href="https://www.getpaint.net/">paint.NET</a> for cover art editing and saving
*  <a href="https://www.audacityteam.org/">Audacity</a> for audio file editing
*  <a href="https://notepad-plus-plus.org/downloads/">Notepad++</a> if there are any last-minute finishing touches needed for the file data  
Note: these recommendations come from my own personal experiences. There may be much better tools out there to get the specific jobs done; however these three were my personal favorites when I manually created charts in the past.

<hr>

## Resources
*  <a href="https://bsmg.wiki/mapping/map-format.html#base-object">Note Charting</a>
*  <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS Grid</a>
*  <a href="https://css-tricks.com/the-shapes-of-css/">The Shapes of CSS</a>
*  <a href="http://xahlee.info/comp/unicode_arrows.html">Unicode Arrows</a>
*  <a href="https://www.w3schools.com/css/css_tooltip.asp">Tooltips</a>
*  <a href="https://www.instructables.com/How-to-make-glowing-text-in-PaintNET/">How to Make Glowing Text</a>
*  <a href="https://fonts.google.com/specimen/Teko">Menu Font</a>
*  <a href="https://befonts.com/neon-tubes-neon-light-font-free.html">Header Font</a>
*  <a href="https://stackoverflow.com/questions/18920542/draw-an-x-in-css">Draw an X in CSS</a>
*  <a href="https://beatsage.com/">Beat Sage</a>
*  <a href="https://youtu.be/v_hR4K4auoQ?list=PLl-K7zZEsYLluG5MCVEzXAQ7ACZBCuZgZ">NoSQL Database with Firestore Series</a>
*  <a href="https://www.youtube.com/watch?v=5Ex6sOEVgrM">Level Editor Tutorial | Beat Saber Explained</a>
*  <a href="https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server">JavaScript create downloadable text file</a>

<hr>

## Bugs and Issues

*  Bug - Custom mouse pointer sometimes reverts to standard mouse pointer
*  Issue - Chart is not editable - mistakes are set in stone unless the chart is downloaded and modified externally.
*  Issue - Chart does not allow for Bomb blocks or Wall blocks.
*  Issue - Attributes that require integers are not locked to integer-only inputs
*  Issue - Save Button and Convert Chart to Notes button have identical code. But it looks so well-balanced right now, I'm keeping it.

<hr>

## Future Planned Improvements

*  Allow editing of chart
*  Add Bomb events and Wall events to chart
*  Allow user to store their custom charts in a database
*  Allow more precise Beat timing - currently only integers are allowed, leaving the user to either be very precise on the offset, or risk track timing errors

<hr>

## Technologies Used

*  HTML5
*  CSS
*  jQuery 3.5.1

## Final Notes
Thank you to everyone who was with me on this incredible journey. Can't wait to see what the future has in store.