import { Application, Assets, Text, AnimatedSprite, TextureStyle, Graphics, Container, Sprite, Texture, Rectangle } from "pixi.js";
import Color from "color";
import { Howl } from "howler";
import WebFont from "webfontloader";

const width = 800
const height = 600

const titleMusic = new Howl({
  src: ['/assets/audio/YoureAGrandOleFlag.mp3'],
  loop: true,
  volume: 0.5
});

// Wait for fonts to load before creating the application
WebFont.load({
  google: {
    families: ['Press Start 2P']
  },
  active: () => {
    // Fonts are loaded, now create the application
    initApplication();
  },
  inactive: () => {
    // Fonts failed to load, but continue anyway
    console.warn('Fonts failed to load, continuing without them');
    initApplication();
  }
});

async function initApplication() {
  TextureStyle.defaultOptions.scaleMode = 'nearest';

  // Lock resolution to prevent blurriness when browser zoom changes
  const lockedResolution = window.devicePixelRatio || 1;

  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({
    background: Color.rgb(0, 0, 0).toString(),
    height: height,
    width: width,
    resizeTo: window,
    autoDensity: true,
    resolution: lockedResolution,
    antialias: false,
    autoStart: true,
  });


  const container = document.getElementById("game-container")!;
  
  // Prevent all forms of zoom
  const preventZoom = (event: Event) => {
    event.preventDefault();
  };
  
  // Prevent wheel zoom
  container.addEventListener('wheel', preventZoom, { passive: false });
  
  // Prevent pinch zoom on touch devices
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  container.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  container.addEventListener('touchend', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  // Prevent keyboard zoom (Ctrl/Cmd + Plus/Minus/0)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
      e.preventDefault();
    }
  });
  
  // Append the application canvas to the document body
  container.appendChild(app.canvas);
  
  // Load the texture directly
  const flagSprite = await createFlagSprite();

  // Create Graphics circle at lower resolution for larger pixels
  const pixelScale = 1/16; // Render at 1/4 size for 4x larger pixels
  const circleGraphics = new Graphics()
    .circle(0, 0, 40 * pixelScale)
    .fill(Color.rgb(59, 193, 255).toString())
    .rect(0, 0, 2, 15)
    // .fill(Color.rgb(0, 0, 0).toString())

  // Render Graphics to a texture with pixelated filtering
  const circleTexture = app.renderer.generateTexture(circleGraphics);
  circleTexture.source.scaleMode = 'nearest';

  // Create a Sprite from the texture and scale it up for larger pixels
  const circleSprite = new Sprite(circleTexture);
  circleSprite.anchor.set(0.5);
  circleSprite.scale.set(1 / pixelScale); // Scale back up to original size

  flagSprite.anchor.set(0.5);
  flagSprite.position.set(55, -10);

  const graphic = new Container();
  graphic.addChild(circleSprite);
  graphic.addChild(flagSprite);

  // Center the sprite's anchor point
  flagSprite.scale.set(2.5);
  flagSprite.zIndex = 1;

  // Set animation speed and play
  flagSprite.animationSpeed = .5; // Adjust speed as needed (0.1 = 10% speed)
  flagSprite.play();

  graphic.position.set(width / 2, height / 2 - 80);
  // Add the flag sprite to the stage
  app.stage.addChild(graphic);
  titleMusic.play();

  const titleText = new Text({
    text: 'Made in America',
    style: {
      fill: '#ffffff',
      fontSize: 24,
      fontFamily: 'Press Start 2P',
      align: 'center',
    }
  });


  const subtitleText = new Text({
    text: 'A History of American Workers',
    style: {
      fill: Color.hsl(0, 0, 70).toString(),
      fontSize: 16,
      fontFamily: 'Press Start 2P',
      align: 'center'
    }
  });
  titleText.anchor.set(0.5);
  subtitleText.anchor.set(0.5);
  titleText.position.set(width / 2, height / 2);
  subtitleText.position.set(width / 2, height / 2 + 32);

  const startButton = new Text({
    text: 'Press SPACE BAR to start',
    style: {
      fill: Color.hsl(0, 0, 100).toString(),
      fontSize: 14,
      fontFamily: 'Press Start 2P',
      align: 'center'
    }
  });
  startButton.anchor.set(0.5);
  startButton.position.set(width / 2, height / 2 + 100);

  app.stage.addChild(titleText);
  app.stage.addChild(subtitleText);
  app.stage.addChild(startButton);

  app.stage.scale.set(0.25);

  const onResize = () => {
    const w = app.screen.width;
    const h = app.screen.height;

    // Calculate scale to maintain aspect ratio
    const scaleX = w / width;
    const scaleY = h / height;
    const scale = Math.min(scaleX, scaleY);

    app.stage.scale.set(scale);

    // Center the stage if there's letterboxing
    app.stage.position.set(
      (w - width * scale) / 2,
      (h - height * scale) / 2
    );
  };
  onResize();

  // Update positions when the app resizes
  app.renderer.on('resize', onResize);

  // Pulse animation for start button
  app.ticker.add((ticker) => {
    startButton.alpha = 0.55 + Math.sin(ticker.lastTime * 0.003) * 0.45;
  })
  
}




async function createFlagSprite() {
  // Load the texture directly
  const baseTexture = await Assets.load('/assets/sprites/us-flag.png');

  // Create texture regions for each frame
  const tileWidth = 60;
  const tileHeight = 40;
  const columns = 7;
  const frameCount = 46;

  const textures: Texture[] = [];

  for (let i = 0; i < frameCount; i++) {
    const row = Math.floor(i / columns);
    const col = i % columns;

    const x = col * tileWidth;
    const y = row * tileHeight;

    // Create a texture region from the base texture
    const frame = new Rectangle(x, y, tileWidth, tileHeight);
    const texture = new Texture({
      source: baseTexture.source,
      frame: frame
    });

    textures.push(texture);
  }

  return new AnimatedSprite(textures);
}