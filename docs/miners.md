# Space Miners Incident: Red Fortune

## Playable Builds

This is the first game I ever made. And I have to say when I tested this game for the creation of this archive, I expected it to be really bad. And obviously it is.

However I was pleasantly surprised with how many interesting design ideas there are despite all the jank and awful graphics.

::: tip
To play, download the Windows binary from GitHub [releases](https://github.com/OwlfaceGames/owlface_archive/releases). See [controls](#controls) first.
:::

## Details

![Gif of space miners](images/miners.gif)

It is a puzzle platformer with some relatively interesting mechanics.

I never studied, game development or computer science or anything like that. When I graduated from unibersity I had a bacheolors and a masters in music tech. In my masters we were taught the very basics of python for some basic scripting.

When I say basic, I mean basic. We only really learnt the basic syntax. However at the time I never thought I'd ever be able to program and it was that experience that made me think maybe, just maybe I could.

My music background made creating music and sound effects easy but pixel art was something I had zero understanding of and back in 2011/2012 the world was a very different place.

I found it difficult to find good tutorials for anything really. All these years later I'm making my own game in C and programming has become my favourite part of the process. I try to never to be an expert and assume that I have something to learn from everyone as even if they can only tell you what you already know you can never learn the basics enough and if it turns out they're a fountain of knowledge, you're waiting with open ears ready to learn instead of closing off that opportunity to improve.

Almost every time I sit down at the computer to start a new project I learn something new and I think that is what I love so much about game development. That and being able to express my creativity in an unparalelled way. Even if ninety percent of this archive is trash.

::: info
- **Playable:** Yes 
- **Source Code:** No
- **Date:** Est. 2012
- **Project Type:** Portfolio Piece
- **Platforms:** Windows
- **Engine:** GameMaker
- **Role:** Everything 
:::

## Original Documentation From 2013

### Gameplay Concept

SM.IRF is a 2d side scrolling platforming puzzle game with elements of action. The main characteristic of this game is that the player controls two characters consecutively. Whilst the player is controlling the first character (which can fly) the game is more like a side scrolling shooter. However once enemies are defeated they create a platform. Once all enemies are defeated the player then has control over the second character and the game becomes a platform game where the player must jump from platform to platform in order to reach the end of the level.

The player must ensure that whilst controlling the first character they destroy each enemy in a position that will in turn create an appropriate path for the second character. As an added twist most levels require keys in order to be completed or the exit of the level will be hidden in some way. Whilst playing as the first character the player must always be considering and figuring out how they will create a path for the second player that will enable them to complete the level.

### Key Development Concepts

The mechanics of this game rely upon two development concepts; the creation of a second playable character and the creation of floating platforms. This idea came about whilst developing a top down shooter style game when I decided that once the enemies were destroyed they should appear to turn to stone. Next I immediately thought of the idea of these blocks becoming floating platforms for a sidescroller. This is implemented by creating an object for a floating platform on the event of an enemy object being destroyed.

The second controllable character is implemented by causing the first character object to be destroyed once all of the enemy objects have been destroyed. At this moment a new charter object is created and the active view (camera) is changed to one that follows the second character.

## Gameplay Video

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    src="https://www.youtube-nocookie.com/embed/dmHsJp5M35Q "
    allowfullscreen>
  </iframe>
</div>

This is a full playthrough of the game so if for whatever reason you want to avoid spoilers, you've been warned.

## Controls

W: Move up / jump

A: Move left

S: Move down

D: Move right (whilst playing as the second character holding "D" will allow the player to climb certain platforms)

Left: Shoot left

Right: Shoot right

Up: Shoot up

Down: Shoot down 

Space: Use door / exit robot.

1: Move forward a level

0: Go back a level


Note: Thier will be a point in the game where the player will 
get control of certain enemies. To exit this enemy press space. If
stuck on a level press "R" to restart. If you still can't complete the level
feel free to skip it by pressing "1".
