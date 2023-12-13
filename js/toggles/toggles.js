export const toggles = [
  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 90px;
      height: 42px;
      background: darkgoldenrod;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      left: 0;
      top: -5px;
      z-index: 2;
      background: darkgoldenrod;
      box-shadow: 0 0 5px #0002;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
      box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .3);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: gold;
      left: 40px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 75px;
      height: 42px;
      background: rgba(255, 215, 0, .2);
      position: relative;
      display: inline-block;
      border-radius: 46px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      left: 2px;
      top: 2px;
      z-index: 2;
      background: gold;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 35px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 78px;
      height: 40px;
      background: rgba(255, 215, 0, .2);
      border: 2px solid gold;
      box-shadow: inset 0 0 0 0 gold;
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      border: 2px solid palegoldenrod;
      border-radius: 50%;
      left: 0;
      top: 0;
      z-index: 2;
      background: gold;
      box-shadow: 0 1px 10px rgba(255, 215, 0, .2);
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 40px 0 0 darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 38px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 70px;
      height: 40px;
      background: palegoldenrod;
      border: 2px solid goldenrod;
      box-shadow: inset -30px 0 0 darkgoldenrod;
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      transition: 0.25s ease-in-out;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 30px 0 0 gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 70px;
      height: 40px;
      background: rgba(255, 215, 0, .2);
      border: 2px solid palegoldenrod;
      box-shadow:inset 0 0 0 0 gold;
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      transition: 0.25s ease-in-out;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      border: 2px solid goldenrod;
      border-radius: 50%;
      left: 0;
      top: 0;
      z-index: 2;
      background: gold;
      box-shadow: 0 1px 10px rgba(255, 215, 0, .1);
      box-sizing: border-box;
      transition: 0.25s ease-in-out;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 0 0 0 18px darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 30px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 75px;
      height: 42px;
      background: gold;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      left: 0;
      top: 0px;
      z-index: 2;
      background: goldenrod;
      box-shadow: 0 0 10px rgba(255, 215, 0, .3), -4px 1px 12px rgba(255, 215, 0, .2);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px rgba(255, 215, 0, .3), 0 3px 8px rgba(255, 215, 0, .2);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 35px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 100px;
      height: 42px;
      background: palegoldenrod;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      left: 2px;
      top: 2px;
      z-index: 2;
      background: gold;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 60px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      border: 2px solid palegoldenrod;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      left: 3px;
      top: 3px;
      z-index: 2;
      border: 2px solid palegoldenrod;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 44px;
      background: rgba(255, 215, 0, .2);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      position: relative;
      display: inline-block;
      background: palegoldenrod;
      border-radius: 46px;
      border: 2px solid goldenrod;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      left: 3px;
      top: 3px;
      z-index: 2;
      background: darkgoldenrod;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 44px;
      background: gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      position: relative;
      display: inline-block;
      background: palegoldenrod;
      border-radius: 46px;
      border: 4px solid gold;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      left: 10px;
      top: 12px;
      z-index: 2;
      background: gold;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 58px;
      background: palegoldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      position: relative;
      display: inline-block;
      background: palegoldenrod;
      border-radius: 46px;
      border: 2px solid goldenrod;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 28px;
      height: 28px;
      border: 2px solid darkgoldenrod;
      box-shadow: 0 0 0 2px gold inset;
      border-radius: 50%;
      left: 6px;
      top: 8px;
      z-index: 2;
      background: darkgoldenrod;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 50px;
      border-color: goldenrod;
      box-shadow: 0 0 0 2px palegoldenrod inset;
      background: goldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      border: 5px solid rgba(255, 215, 0, .5);
      height: 35px;
      width: 70px;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: rgba(255, 215, 0, .5);
      width: 28px;
      height: 28px;
      left: 8px;
      top: 8px;
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 5px palegoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
      box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      border-color: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: gold;
      left: 44px;
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 30px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      appearance: none;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
      isolation: isolate;
      position: relative;
      height: 30px;
      width: 60px;
      border-radius: 15px;
      box-shadow:
        -8px -4px 8px 0px rgba(184, 134, 11, .1),
        8px 4px 12px 0px rgba(184, 134, 11, .2),
        4px 4px 4px 0px rgba(184, 134, 11, .2) inset,
        -4px -4px 4px 0px rgba(184, 134, 11, .1) inset;
    }
    .toggle label:after {
      content: '';
      height: 30px;
      width: 30px;
      background: goldenrod;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 15px;
      transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
      box-shadow: -8px -4px 8px 0px rgba(184 134 11, .2), 8px 4px 12px 0px rgba(184 134 11, .1);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translate3d(30px, 0, 0);
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 30px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      appearance: none;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
      isolation: isolate;
      position: relative;
      height: 30px;
      width: 60px;
      box-shadow:
        -8px -4px 8px 0px rgba(184, 134, 11, .1),
        8px 4px 12px 0px rgba(184, 134, 11, .2),
        4px 4px 4px 0px rgba(184, 134, 11, .2) inset,
        -4px -4px 4px 0px rgba(184, 134, 11, .1) inset;
    }
    .toggle label:after {
      content: '';
      height: 30px;
      width: 30px;
      background: gold;
      position: absolute;
      left: 0;
      top: 0;
      transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translate3d(30px, 0, 0);
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 30px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      appearance: none;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
      isolation: isolate;
      position: relative;
      height: 30px;
      width: 75px;
      border-radius: 15px;
      box-shadow: inset 0px 1px 20px 0px darkgoldenrod, 8px 4px 12px 0px rgba(238, 232, 170, .1), 4px 4px 4px 0px rgba(238, 232, 170, .1) inset, -4px -4px 4px 0px #6a4b00 inset;
    }
    .toggle label:after {
      content: '';
      height: 30px;
      width: 45px;
      border-radius: 15px;
      background: gold;
      position: absolute;
      left: 0;
      top: 0;
      transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
      box-shadow: 0px 0px 2px 1px #927b00, 8px 4px 12px 0px rgba(238, 232, 170, .1);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translate3d(30px, 0, 0);
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 30px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      appearance: none;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
      box-sizing: border-box;
      isolation: isolate;
      position: relative;
      height: 32px;
      width: 64px;
      border-radius: 15px;
      background: gold;
    }
    .toggle label:after {
      content: 'o';
      height: 32px;
      width: 32px;
      box-sizing: border-box;
      border-radius: 15px;
      background: palegoldenrod;
      font-family: arial;
      color: darkgoldenrod;
      font-size: 22px;
      line-height: 30px;
      font-weight: 800;
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: 'I';
      font-size: 18px;
      line-height: 32px;
      transform: translate3d(32px, 0, 0);
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 30px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      appearance: none;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
      box-sizing: border-box;
      isolation: isolate;
      position: relative;
      height: 32px;
      width: 96px;
      border-radius: 15px;
      background: gold;
    }
    .toggle label:after {
      content: 'OFF';
      height: 32px;
      width: 48px;
      box-sizing: border-box;
      border-radius: 15px;
      background: palegoldenrod;
      font-family: arial;
      color: darkgoldenrod;
      font-size: 14px;
      line-height: 32px;
      font-weight: 800;
      text-align: center;
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: 'ON';
      color: goldenrod;
      transform: translate3d(48px, 0, 0);
    }`
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      background: gold;
      height: 25px;
      width: 75px;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: darkgoldenrod;
      top: -8px;
      width: 38px;
      height: 38px;
      left: 0;
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
      box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: goldenrod;
      left: 40px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 56px;
      height: 22px;
      background: palegoldenrod;
      box-shadow: inset 0 0 0 0px gold;
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      left: 0;
      top: -4px;
      z-index: 2;
      background: gold;
      box-shadow: 0 1px 10px rgba(255, 215, 0, .1);
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 40px 0 0 goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 26px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      background: palegoldenrod;
      height: 15px;
      width: 85px;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: gold;
      top: -12px;
      width: 36px;
      height: 36px;
      left: 0;
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
      box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .5), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: darkgoldenrod;
      left: 50px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      background: palegoldenrod;
      height: 2px;
      width: 60px;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: gold;
      top: -16px;
      width: 32px;
      height: 32px;
      left: 0;
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 5px rgba(255, 215, 0, .2);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: darkgoldenrod;
      left: 28px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: gold;
      height: 2px;
      width: 64px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: palegoldenrod;
      border: 8px solid gold;
      top: -14px;
      width: 28px;
      height: 28px;
      left: 0;
      border-radius: 50%;
      z-index: 2;
      box-sizing:border-box;
      box-shadow: 0 0 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      border-color: darkgoldenrod;
      left: 36px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: gold;
      border-radius: 4px;
      height: 5px;
      width: 64px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: palegoldenrod;
      top: 0;
      left: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      z-index: 2;
      box-sizing:border-box;
      box-shadow: inset 0 0 0 4px gold, 0 0 0 5px palegoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      box-shadow: inset 0 0 0 20px gold, 0 0 0 5px darkgoldenrod;
      border-color: goldenrod;
      left: 36px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: gold;
      height: 2px;
      width: 64px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: palegoldenrod;
      border: 6px solid gold;
      top: 5px;
      width: 22px;
      height: 22px;
      left: 0;
      z-index: 2;
      box-sizing:border-box;
      box-shadow: 0 0 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      border-color: darkgoldenrod;
      left: 42px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: darkgoldenrod;
      height: 2px;
      width: 64px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: goldenrod;
      border: 6px solid gold;
      top: 5px;
      width: 22px;
      height: 22px;
      left: 0;
      z-index: 2;
      transform:rotate(45deg);
      box-sizing:border-box;
      box-shadow: 0 0 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .5), 0 3px 8px 0 rgba(255, 215, 0, .5);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      border-color: palegoldenrod;
      left: 42px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: goldenrod;
      height: 30px;
      width: 64px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: darkgoldenrod;
      top: 5px;
      width: 22px;
      height: 22px;
      left: 4px;
      z-index: 2;
      box-sizing:border-box;
      box-shadow: 0 0 5px palegoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 palegoldenrod, 0 3px 8px 0 palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background-color: goldenrod;
      left: 38px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: darkgoldenrod;
      height: 20px;
      width: 64px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      border: 2px solid gold;
      background: goldenrod;
      top: 0;
      width: 32px;
      height: 32px;
      left: 0;
      z-index: 2;
      box-sizing:border-box;
      box-shadow: 0 0 5px palegoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
      box-shadow: 0 2px 15px 0 darkgoldenrod, 0 3px 8px 0 darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      border-color: goldenrod ;
      background-color: darkgoldenrod;
      left: 38px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: gold;
      height: 20px;
      width: 74px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      top: -2px;
      width: 32px;
      height: 32px;
      left: 0;
      z-index: 2;
      box-sizing:border-box;
      background: darkgoldenrod;
      border-bottom: 0.07em solid palegoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: #gold;
      border-bottom: 0.07em solid darkgoldenrod;
      left: 42px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: gold;
      height: 32px;
      width: 74px;
      position: relative;
      display: inline-block;
      border-radius: 16px;
      box-sizing:border-box;
      transition: .5s cubic-bezier(0.52, -0.41, 0.55, 1.46);
    }
    .toggle label:after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 22px;
      height: 22px;
      border-radius: 16px;
      z-index: 2;
      box-sizing:border-box;
      background: goldenrod;
      border-left: 0.07em solid palegoldenrod;
      border-bottom: 0.07em solid darkgoldenrod;
      transition: .5s cubic-bezier(0.52, -0.41, 0.55, 1.46);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: gold;
      border-left: none;
      border-right: 0.07em solid darkgoldenrod;
      border-bottom: 0.07em solid palegoldenrod;
      left: 48px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: rgba(255, 215, 0, .2);
      height: 32px;
      width: 74px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 22px;
      height: 22px;
      z-index: 2;
      box-sizing:border-box;
      background: gold;
      border-left: 0.07em solid darkgoldenrod;
      border-bottom: 0.07em solid darkgoldenrod;
      transition: .5s cubic-bezier(0.52, -0.41, 0.55, 1.46);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: rgba(255, 215, 0, .5);
      border-left: none;
      border-right: 0.07em solid darkgoldenrod;
      border-bottom: 0.07em solid goldenrod;
      transform: translatex(44px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: rgba(255, 215, 0, .5);
      height: 32px;
      width: 68px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 76% 100%, 25% 100%, 0% 50%);
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: darkgoldenrod;
      top: 5px;
      width: 22px;
      height: 22px;
      left: 8px;
      z-index: 2;
      transform: rotate(45deg);
      box-sizing:border-box;
      box-shadow: 0 0 5px rgba(255, 215, 0, .2);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
      box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background-color: goldenrod;
      left: 38px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 38px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: rgba(255, 215, 0, .5);
      height: 40px;
      width: 84px;
      border-radius: 30px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      top: 7px;
      left: 10px;
      width: 22px;
      height: 22px;
      transform: rotate(45deg);
      z-index: 2;
      box-sizing:border-box;
      background: rgba(255, 215, 0, .5);
      border-left: 0.07em solid darkgoldenrod;
      border-bottom: 0.07em solid darkgoldenrod;
      transition: .5s cubic-bezier(0.52, -0.41, 0.55, 1.46);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: darkgoldenrod;
      border-left: none;
      border-right: 0.07em solid rgba(255, 215, 0, .7);
      border-bottom: 0.07em solid rgba(255, 215, 0, .5);
      box-shadow: 0 0.16em 0.01em gold, 0 0.12em 0.3em rgb(255 215 0 / 60%), 0 0.12em 2em rgb(255 215 0 / 30%), -0.12em 0.15em 0.2em rgb(255 215 0 / 20%);
      transform: translatex(44px) rotate(45deg);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      border-radius: 10px;
      width: 84px;
      height: 42px;
      background: gold;
      position: relative;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      border-radius: 10px;
      width: 42px;
      height: 42px;
      left: 0;
      top: 0;
      z-index: 2;
      background: goldenrod;
      box-shadow: 0 0 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 palegoldenrod, 0 3px 8px 0 palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow:inset 42px 0 gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translatex(42px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      background: gold;
      position: relative;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 42px;
      height: 42px;
      left: 0;
      top: 0;
      z-index: 2;
      background: darkgoldenrod;
      box-shadow: 0 0 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 palegoldenrod, 0 3px 8px 0 palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translatex(42px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      background: gold;
      position: relative;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 36px;
      height: 36px;
      left: 3px;
      top: 3px;
      z-index: 2;
      background: palegoldenrod;
      box-shadow: 0 2px 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .5);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translatex(42px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: darkgoldenrod;
      height: 2px;
      width: 64px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background: gold;
      border: 2px solid goldenrod;
      top: 3px;
      width: 24px;
      height: 24px;
      left: 0;
      z-index: 2;
      border-radius: 4px;
      box-sizing:border-box;
      box-shadow: 0 0 5px rgba(255, 215, 0, .5);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
      box-shadow: 0 2px 15px 0 palegoldenrod, 0 3px 8px 0 palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      border-color: goldenrod;
      left: 40px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 72px;
      height: 36px;
      background: gold;
      position: relative;
      border-radius: 4px;
      display: inline-block;
      box-shadow: inset 0 0 palegoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      border-radius: 4px;
      width: 32px;
      height: 32px;
      left: 2px;
      top: 2px;
      z-index: 2;
      background: darkgoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 84px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translatex(36px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 64px;
      height: 32px;
      position: relative;
      border-radius: 4px;
      border: 2px solid palegoldenrod;
      background: goldenrod;
      display: inline-block;
      transition: 0.25s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      border-radius: 4px;
      background: rgba(255, 215, 0, .5);
      width: 28px;
      height: 28px;
      left: 4px;
      top: 4px;
      z-index: 2;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: palegoldenrod;
      transform: translatex(32px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 40px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      width: 120px;
      height: 40px;
      border: 1px solid palegoldenrod;
      border-radius: 50px;
      transition: 0.2s ease-in;
      background: rgba(255, 215, 0, .1);
      box-shadow: inset 0 0 7px darkgoldenrod, 
        0 -4px 4px rgba(255, 215, 0, .5), 
        0 4px 4px rgba(255, 215, 0, .4),
        inset 0 0 rgba(255, 215, 0, .1);
    }
    .toggle label:after {
      content: '';
      position: absolute;
      top: 0px;
      left: 1px;
      width: 55px;
      height: 30px;
      border: 5px solid gold;
      border-radius: 50px;
      box-shadow: 0 2px 5px goldenrod;
      background: darkgoldenrod;
      background: linear-gradient(gold 0%, rgba(255, 215, 0, .5) 100%);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 0 0 7px rgba(255, 215, 0, .5), 
        0 -4px 4px rgba(255, 215, 0, .4), 
        0 4px 4px rgba(255, 215, 0, .2),
        inset 120px 0 rgba(255, 215, 0, .3);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translatex(55px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      border-radius: 10px;
      width: 95px;
      height: 42px;
      background: goldenrod;
      position: relative;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      border-radius: 10px;
      width: 60px;
      height: 42px;
      left: 0;
      top: 0;
      z-index: 2;
      background: rgba(255, 215, 0, .5);
      box-shadow: 0 0 5px rgba(255, 215, 0, .2);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 palegoldenrod, 0 3px 8px 0 palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 35px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 90px;
      height: 32px;
      border-radius: 20px;
      background: gold;
      position: relative;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      border-radius: 20px;
      top: 0;
      width: 50px;
      height: 32px;
      left: 0;
      z-index: 2;
      background: darkgoldenrod;
      box-shadow: 0 0 10px palegoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after {
      box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 40px;
    }`,
  },

  {
    css: `.toggle {
    position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 42px;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      border-radius: 20px;
      width: 84px;
      height: 32px;
      background: rgba(255, 215, 0, .2);
      position: relative;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      border-radius: 10px;
      width: 42px;
      height: 42px;
      left: 0;
      top: 0;
      z-index: 2;
      
      transform: rotate(45deg);
      background: palegoldenrod;
      box-shadow: 0 0 0 2px rgba(255, 215, 0, .2);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after  {
        box-shadow: 0 2px 15px 0 rgba(255, 215, 0, .2), 0 3px 8px 0 rgba(255, 215, 0, .1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 42px;
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 40px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      width: 72px;
      height: 36px;
      border: 1px solid palegoldenrod;
      box-sizing:border-box;
      border-radius: 50px;
      transition: 0.2s ease-in;
      background: rgba(255, 215, 0, .1);
      box-shadow: inset 0 0 8px rgba(255, 215, 0, .2);
    }
    .toggle label:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 0;
      box-sizing:border-box;
      width: 36px;
      height: 36px;
      border: 6px solid godlenrod;
      border-radius: 50px;
      background: gold;
      box-shadow: 0 2px 5px rgba(255, 215, 0, .5);
      background: darkgoldenrod;
      background: linear-gradient(darkgoldenrod 0%, gold 100%);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow:inset 0 0 8px palegoldenrod, inset 120px 0 palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translatex(36px);
    }`
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle:before {
      content: '';
      position: absolute;
      border-bottom: 3px solid goldenrod;
      border-right: 3px solid goldenrod;
      width: 6px;
      height: 14px;
      z-index: 2;
      transform: rotate(45deg);
      top: 11px;
      left: 15px;
    }
    .toggle:after {
      content: '×';
      position: absolute;
      top: 0;
      left: 55px;
      z-index: 2;
      line-height: 42px;
      font-size: 26px;
      color: palegoldenrod;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 80px;
      height: 42px;
      box-shadow: 0 0 1px 2px rgba(255, 215, 0, .1);
      background: goldenrod;
      position: relative;
      display: inline-block;
      border-radius: 46px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      left: 0;
      top: 0;
      z-index: 5;
      background: gold;
      box-shadow: 0 0 5px rgba(255, 215, 0, .2);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:hover + label:after {
      box-shadow: 0 2px 15px 0 palegoldenrod, 0 3px 8px 0 palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      transition: 0.1s 0.2s ease-in;
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 38px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type=checkbox] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    .toggle input[type=checkbox]:before,
    .toggle input[type=checkbox]:after {
      content: "";
      width: 5px;
      height: 14px;
      background: gold;
      z-index: 1;
      left: 10px;
      top: 6px;
      border-radius: 14px;
      box-sizing: border-box;
      position: absolute;
    }
    .toggle input[type=checkbox]:after {
      background: none;
      border: 3px solid gold;
      width: 14px;
      left: 45px;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 72px;
      height: 32px;
      background: goldenrod;
      box-shadow: inset 0 0 0 0px darkgoldenrod;
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      left: 0;
      top: -4px;
      z-index: 2;
      background: goldenrod;
      box-shadow: 0 1px 10px rgba(255, 215, 0, .5);
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type=checkbox]:checked + label:before {
      box-shadow: inset 40px 0 0 darkgoldenrod;
    }
    .toggle input[type=checkbox]:checked + label:after {
      left: 32px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 36px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 72px;
      height: 36px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.3s cubic-bezier(0.55, 0.06, 0.78, 0.21);
      box-sizing: border-box;
      background-color: rgba(255, 215, 0, .1);
      box-shadow: 0 0 10px rgba(255, 215, 0, .1), inset -36px 0 rgba(255, 215, 0, .3);
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 4px solid rgba(255, 215, 0, .3);
      border-radius: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: translate(8px , 8px);
      transition: 0.3s cubic-bezier(0.55, 0.06, 0.78, 0.21);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      width: 0;
      transform: translate(50px , 8px)
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: 0 0 10px gold, inset 36px 0 gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 36px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 72px;
      height: 36px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.3s cubic-bezier(0.43, -0.26, 0.69, 1.39);
      box-sizing: border-box;
      background-color: palegoldenrod;
      box-shadow: 0 0 10px rgba(255, 215, 0, .2), inset -36px 0 gold;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: goldenrod;
      border-radius: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: translate(8px , 8px);
      transition: 0.3s cubic-bezier(0.43, -0.26, 0.69, 1.39);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      width: 4px;
      height: 16px;
      transform: translate(53px , 10px)
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: 0 0 10px rgba(255, 215, 0, .2), inset 36px 0 gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 36px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 72px;
      height: 36px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      box-sizing: border-box;
      background-color: goldenrod;
      box-shadow: 0 0 12px palegoldenrod, inset -36px 0 gold;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: darkgoldenrod;
      border-radius: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: translate(10px , 10px);
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      width: 4px;
      height: 16px;
      background: darkgoldenrod;
      transform: translate(53px , 10px);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: 0 0 12px goldenrod, inset 36px 0 palegoldenrod;
      background: gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 36px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 72px;
      height: 36px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.3s ease-in;
      box-sizing: border-box;
      background-color: rgba(255, 215, 0, .2);
      box-shadow: 0 0 12px rgba(255, 215, 0, .1), inset -72px 0 rgba(255, 215, 0, .3);
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: palegoldenrod;
      border-radius: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: translate(10px , 10px);
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: gold;
      transform: translate(47px, 10px);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
      box-shadow: 0 0 12px rgba(255, 215, 0, .5), inset 0 0 rgba(255, 215, 0, .5);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 36px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 72px;
      height: 36px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.4s cubic-bezier(1, 1, 1, 1);
      box-sizing: border-box;
      background-color: rgba(255, 215, 0, .1);
      box-shadow: 0 0 10px palegoldenrod, inset -36px 0 darkgoldenrod;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: goldenrod;
      border-radius: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: translate(8px , 8px);
      transition: 0.3s cubic-bezier(1, 1, 1, 1);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      width: 4px;
      height: 16px;
      transform: translate(53px , 10px)
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: 0 0 10px rgba(255, 215, 1, .5), inset 36px 0 rgba(255, 215, 1, .2);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 36px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 72px;
      height: 36px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.2s ease;
      box-sizing: border-box;
      background-color: gold;
      box-shadow: 0 0 12px palegoldenrod, inset -72px 0 darkgoldenrod;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: palegoldenrod;
      border-radius: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: translate(8px , 8px);
      transition: 0.2s ease;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: darkgoldenrod;
      transform: translate(47px, 8px);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: 0 0 12px goldenrod, inset 0 0 gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 36px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 72px;
      height: 36px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.3s ease-in;
      box-sizing: border-box;
      background-color: rgba(255, 215, 0, .2);
    }
    .toggle label:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      background: gold;
      border-radius: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: translate(3px, 3px) rotate(0deg);
      transition: 0.3s ease-in;
      transform-origin: 33px 33px;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translate(3px, 3px) rotate(90deg);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      transform:  rotate(-180deg);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: rgba(255, 215, 0, .5);
      height: 32px;
      width: 94px;
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: 'OFF';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 42px;
      height: 24px;
      z-index: 2;
      display: grid;
      place-content: center;
      font-family: arial;
      font-weight: bold;
      box-sizing:border-box;
      color: gold;
      background: darkgoldenrod;
      transition: 0.25s ease-in-out;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: 'ON';
      background: goldenrod;
      transform: translatex(44px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: goldenrod;
      height: 18px;
      width: 84px;
      border-radius: 10px;
      box-shadow: inset 0 0.1em 0.03em rgba(255, 215, 0, .2), inset 0 0.1em 0.3em rgba(255, 215, 0, .3), 0 0 2em rgba(255, 215, 0, .7);
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: 'OFF';
      position: absolute;
      top: -6px;
      left: 0;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 12px;
      font-family: arial;
      font-weight: bold;
      box-sizing:border-box;
      color: goldenrod;
      background: gold;
      box-shadow: -2px 2px 4px rgba(255, 215, 0, .5);
      transition: 0.25s ease-in-out;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: 'ON';
      background: gold;
      transform: translatex(44px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: gold;
      height: 34px;
      width: 90px;
      border-radius: 20px;
      box-shadow: inset 0 0.1em 0.03em rgba(255, 215, 0, .2), inset 0 0.1em 0.3em rgba(255, 215, 0, .3);
      position: relative;
      display: inline-block;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: 'O';
      position: absolute;
      top: 2px;
      left: 3px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 20px;
      font-family: arial;
      font-weight: bold;
      box-sizing:border-box;
      color: palegoldenrod;
      background: darkgoldenrod;
      box-shadow: -2px 2px 4px rgba(255, 215, 0, .4);
      transition: 0.25s ease-in-out;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: 'I';
      background: goldenrod;
      transform: translatex(57px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle input[type=checkbox] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    .toggle input[type=checkbox]:before, .toggle input[type=checkbox]:after {
      content: "";
      background: palegoldenrod;
      width: 2px;
      height: 16px;
      position: absolute;
      left: 0px;
      top: 0;
      transition: 0.25s ease-in-out;
      transform: translate(13px, 5px) rotate(45deg);
    }
    .toggle input[type=checkbox]:after {
      transform: translate(13px, 5px) rotate(-45deg);
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      background: gold;
      height: 36px;
      width: 85px;
      border-radius: 20px;
      border: 1px solid palegoldenrod;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    
    .toggle label:after {
      content: "";
      position: absolute;
      top: 0;
      left: 2px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 20px;
      font-family: arial;
      font-weight: bold;
      box-sizing: border-box;
      color: darkgoldenrod;
      background: goldenrod;
      transition: 0.25s ease-in-out;
    }
    .toggle input[type=checkbox]:checked:before {
      left: 51px;
      transform: translate(15px, 5px) rotate(45deg);
    }
    .toggle input[type=checkbox]:checked:after {
      transform: translate(8px, 12px) rotate(-45deg);
      height: 8px;
      left: 51px;
    }
    .toggle input[type=checkbox]:checked + label:before {
      background: gold;
    }
    .toggle input[type=checkbox]:checked + label:after {
      background: goldenrod;
      transform: translatex(51px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 42px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle input[type=checkbox] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    .toggle input[type=checkbox]:before, .toggle input[type=checkbox]:after {
      content: "";
      background: gold;
      width: 3px;
      height: 22px;
      position: absolute;
      left: 0px;
      top: 0;
      transition: 0.25s ease-in-out;
      transform: translate(16px, 7px) rotate(45deg);
    }
    .toggle input[type=checkbox]:after {
      transform: translate(16px, 7px) rotate(-45deg);
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      background: rgba(255, 215, 0, .2);
      height: 42px;
      width: 84px;
      border-radius: 20px;
      border: 1px solid palegoldenrod;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 1px solid palegoldenrod;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 20px;
      font-family: arial;
      font-weight: bold;
      box-sizing: border-box;
      color: darkgoldenrod;
      background: darkgoldenrod;
      transition: 0.25s ease-in-out;
    }
    .toggle input[type=checkbox]:checked:before {
      left: 51px;
      background: gold;
      transform: translate(20px, 8px) rotate(45deg);
    }
    .toggle input[type=checkbox]:checked:after {
      background: gold;
      transform: translate(10px, 18px) rotate(-45deg);
      height: 8px;
      left: 51px;
    }
    .toggle input[type=checkbox]:checked + label:before {
      background: gold;
      border-color: darkgoldenrod;
    }
    .toggle input[type=checkbox]:checked + label:after {
      transform: translatex(51px);
      border-color: gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before  , .toggle label:after {
      font-size: 18px;
      font-weight: bold;
      font-family: arial;
      line-height: 36px;
      transition: 0.2s ease-in;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: 'Yes';
      background: darkgoldenrod;
      color: rgba(255, 155, 0, .5);
      height: 36px;
      width: 90px;
      display: inline-flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 10px;
    }
    .toggle label:after {
      content: 'No';
      position: absolute;
      left: 58px;
      top: -2px;
      color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
      color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      color: palegoldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before,
    .toggle label:after {
      font-weight: bold;
      font-family: arial;
      line-height: 36px;
      transition: 0.2s ease-in;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: 'Yes';
      background: rgba(255, 215, 0, .5);
      color: palegoldenroad;
      font-size: 16px;
      height: 36px;
      width: 90px;
      display: inline-flex;
      text-decoration: line-through;
      align-items: center;
      padding: 0 10px;
      border-radius: 10px;
    }
    .toggle label:after {
      content: 'No';
      position: absolute;
      left: 55px;
      top: -2px;
      font-size: 22px;
      color: rgba(255, 215, 0, .2);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      color: gold;
      font-size: 22px;
      text-decoration: none;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      color: goldenrod;
      font-size: 16px;
      left: 60px;
      text-decoration: line-through;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 36px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: 'Yes No';
      background: rgba(255, 215, 0, .2);
      color: goldenrod;
      height: 36px;
      word-spacing: 16px;
      font-weight: bold;
      font-size: 16px;
      font-family:arial;
      line-height: 36px;
      width: 90px;
      display: inline-flex;
      align-items: center;
      padding-left: 8px;
      border-radius: 20px;
      border: 2px solid palegoldenrod;
      box-sizing:border-box;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      left: 2px;
      top: 2px;
      width: 45px;
      height: 32px;
      background: darkgoldenrod;
      color: gold;
      border-radius: 20px 0 0 20px;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 43px;
      border-radius: 0 20px 20px 0;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 36px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      appearance: none;
    }
    .toggle input[type=checkbox]:before,
    .toggle input[type=checkbox]:after {
      content: "";
      background: gold;
      width: 3px;
      height: 22px;
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.25s ease-in-out;
      transform: translate(57px, 4px) rotate(45deg);
    }
    .toggle input[type=checkbox]:after {
      transform: translate(57px, 4px) rotate(-45deg);
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before,
    .toggle label:after {
      font-size: 18px;
      font-weight: bold;
      font-family:arial;
      line-height: 36px;
      transition: 0.2s ease-in;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: 'Yes';
      background: darkgoldenrod;
      color: gold;
      height: 36px;
      width: 120px;
      display: inline-flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 20px;
    }
    .toggle label:after {
      content: 'No';
      position: absolute;
      left: 87px;
      top: 0;
      color: gold;
    }
    .toggle input[type=checkbox]:checked:before {
      transform: translate(60px, 4px) rotate(45deg);
    }
    .toggle input[type=checkbox]:checked:after {
      transform: translate(50px, 14px) rotate(-45deg);
      height: 8px;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: rgba(255, 215, 0, .1);
      color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      color: rgba(255, 215, 0, .7);
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
      perspective: 64px;
    }
    .toggle label:before {
      content: 'Yes No';
      background: goldenrod;
      color: darkgoldenrod;
      height: 32px;
      width: 64px;
      word-spacing: 12px;
      font-weight: bold;
      font-size: 12px;
      font-family:arial;
      line-height: 36px;
      display: inline-flex;
      align-items: center;
      padding-left: 4px;
      box-sizing:border-box;
      transition: 0.3s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      left: 3px;
      top: 3px;
      width: 29px;
      height: 26px;
      background: gold;
      transform-origin: 100% 50% 0;
      transition: 0.3s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: rgbar(255, 215, 0, .2);
      color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: rotateY(180deg);
      background: gold;
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: 'Yes No';
      background: goldenrod;
      color: rgbar(255, 215, 0, .5);
      height: 32px;
      width: 64px;
      word-spacing: 12px;
      font-weight: bold;
      font-size: 12px;
      font-family:arial;
      line-height: 36px;
      display: inline-flex;
      align-items: center;
      padding-left: 4px;
      box-sizing:border-box;
      transition: 0.3s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      left: 3px;
      top: 3px;
      width: 29px;
      height: 26px;
      background: palegoldenrod;
      transform-origin: 100% 50% 0;
      transition: 0.3s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: rgbar(255, 215, 0, .2);
      color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translatex(28px);
      background: gold;
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: 'Yes No';
      background: goldenrod;
      color: palegoldenrod;
      height: 32px;
      width: 64px;
      word-spacing: 12px;
      font-weight: bold;
      font-size: 12px;
      font-family:arial;
      line-height: 36px;
      display: inline-flex;
      align-items: center;
      padding-left: 4px;
      box-sizing:border-box;
      transition: 0.3s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      left: 3px;
      top: 3px;
      width: 29px;
      height: 26px;
      background: palegoldenrod;
      transform-origin: 100% 50% 0;
      transition: 0.3s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: rgba(255, 215, 0, .5);
      color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: rotate(180deg);
      background: gold;
    }`
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: 'Yes No';
      background: darkgoldenrod;
      color: palegoldenrod;
      height: 32px;
      width: 64px;
      word-spacing: 12px;
      font-weight: bold;
      font-size: 12px;
      font-family:arial;
      line-height: 36px;
      display: inline-flex;
      align-items: center;
      padding-left: 4px;
      box-sizing:border-box;
      transition: 0.3s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      left: 3px;
      top: 14px;
      width: 29px;
      height: 4px;
      background: darkgoldenrod;
      transform-origin: 100% 50% 0;
      transition: 0.3s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: palegoldenrod;
      color: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translatex(28px);
      background: gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      background: rgba(255, 215, 0, .2);
      height: 32px;
      width: 64px;
      display: inline-flex;
      box-sizing:border-box;
      transition: 0.3s ease-in;
    }
    .toggle label:after {
      content: 'Yes No';
      word-spacing: 12px;
      font-weight: bold;
      font-size: 12px;
      font-family:arial;
      line-height: 26px;
      text-indent: -30px;
      overflow: hidden;
      white-space: nowrap;
      color: palegoldenrod;
      position: absolute;
      left: 3px;
      top: 3px;
      width: 29px;
      height: 26px;
      background: goldenrod;
      transform-origin: 100% 50% 0;
      transition: 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      text-indent: 4px;
      transform: translatex(29px);
      background: goldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 42px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before,
    .toggle label:after {
      font-size: 18px;
      font-weight: bold;
      font-family:arial;
      transition: 0.2s ease-in;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: "Yes";
      background: goldenrod;
      color: gold;
      height: 42px;
      width: 140px;
      display: inline-flex;
      align-items: center;
      padding-left: 8px;
      border-radius: 30px;
      border: 8px solid palegoldenrod;
      box-shadow: inset 50px 0px 0 0px darkgoldenrod;
    }
    .toggle label:after {
      content: "No";
      position: absolute;
      left: 100px;
      line-height: 42px;
      top: 0;
      color: rgba(255, 215, 0, .5);
    }
    .toggle input[type="checkbox"]:checked + label:before {
        color: gold;
        box-shadow: inset -50px 0px 0 0px goldenrod;
        border-color: gold;
        background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      color: gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 42px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before,
    .toggle label:after {
      font-size: 18px;
      font-weight: bold;
      font-family:arial;
      transition: 0.2s ease-in;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: "Yes";
      background: rgba(255, 215, 0, .2);
      color: transparent;
      height: 42px;
      width: 140px;
      display: inline-flex;
      align-items: center;
      padding-left: 15px;
      border-radius: 30px;
      border: 1px solid gold;
      box-shadow: inset 140px 0px 0 0px rgba(255, 215, 0, .1);
    }
    .toggle label:after {
      content: "No";
      position: absolute;
      left: 100px;
      line-height: 42px;
      top: 0;
      color: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
        color: palegoldenrod;
        box-shadow: inset 0px 0px 0 0px gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      color: transparent;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 36px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
      perspective: 150px;
    }
    .toggle label:before {
      content: 'Yes No';
      background: rgba(255, 215, 0, .2);
      color: goldenrod;
      height: 36px;
      width: 140px;
      word-spacing: 67px;
      font-weight: bold;
      font-size: 16px;
      font-family:arial;
      line-height: 36px;
      display: inline-flex;
      align-items: center;
      padding-left: 8px;
      border-radius: 4px;
      border: 2px solid palegodlenrod;
      box-sizing:border-box;
      transition: 0.3s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      left: 2px;
      top: 2px;
      width: 68px;
      height: 32px;
      background: rgba(255, 215, 0, .5);
      border-radius: 4px;
      transform-origin: 100% 50% 0;
      transition: 0.3s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: rotateY(180deg);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 42px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before,
    .toggle label:after {
      font-size: 18px;
      font-weight: bold;
      font-family:arial;
      transition: 0.2s ease-in;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: "Yes";
      background: darkgoldenrod;
      color: gold;
      height: 42px;
      width: 140px;
      display: inline-flex;
      align-items: center;
      padding-left: 15px;
      border-radius: 4px;
      transition: .5s cubic-bezier(0.52, -0.41, 0.55, 1.46);
      box-shadow: inset 70px 0px 0 0px goldenrod;
    }
    .toggle label:after {
      content: "No";
      position: absolute;
      left: 100px;
      line-height: 42px;
      top: 0;
      color: goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      color: gold;
      box-shadow: inset -70px 0px 0 0px palegoldenrod;
      border-color: gold;
      background: rgba(255, 215, 0, .5);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      color: goldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle:before, .toggle:after {
      position: absolute;
      top: 0;
      z-index: 1;
      height:32px;
      line-height: 32px;
      font-weight: 600;
      font-size: 12px;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
    .toggle:before {
      content: 'ON';
      left: 10px;
      color: gold;
    }
    .toggle:after {
      content: 'OFF';
      right: 10px;
      color: goldenrod;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      background: darkgoldenrod;
      height: 32px;
      box-shadow: 0 0 1px 2px palegoldenrod;
      width: 90px;
      display: inline-block;
      transition: 0.1s linear;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background-color: goldenrod;
      background-size: 100%;
      background-image: linear-gradient(to right, rgba(255, 215, 0, .2) 30%, rgba(255, 215, 0, .5) 45%, rgba(255, 215, 0, .2) 50%, rgba(255, 215, 0, .5) 55%, rgba(255, 215, 0, .2) 70%);
      border-radius: 0;
      width: 50px;
      height: 32px;
      left: 0;
      top: 0;
      z-index: 5;
      transition: 0.1s linear;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 40px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      background: rgba(255, 215, 0, .2);
      color: goldenrod;
      height: 40px;
      padding: 0 10px;
      border-radius: 50px;
      font-weight: 800;
    }
    .toggle:after, .toggle:before {
      content: 'ON';
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      line-height: 40px;
      font-size: 12px;
    }
    .toggle:before {
      content: 'OFF';
      z-index: 1;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      background: rgba(255, 215, 0, .5);
      height: 10px;
      width: 70px;
      margin: 0 5px;
      box-shadow: 0 0 2px 2px palegoldenrod inset;
      position: relative;
      display: inline-block;
      border-radius: 20px;
    }
    .toggle label:before {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      border-radius: 100%;
      transition: 0.3s ease-in;
      background: darkgoldenrod;
      z-index: 3;
      left: 7px;
      top: -2px;
    }
    .toggle label:after {
      content: '';
      background-color: goldenrod;
      background-size: 100%;
      background-image: linear-gradient(to bottom, gold 0%, palegoldenrod 100%);
      top: -9px;
      left: 0;
      width: 27px;
      height: 27px;
      position: absolute;
      border-radius: 50%;
      z-index: 2;
      transition: 0.3s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: palegoldenrod;
      box-shadow: 0 0 5px darkgoldenrod;
      left: 52px;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 45px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      display: inline-block;
    }
    .toggle:after {
      content: 'OFF';
      font-family: Arial;
      position: absolute;
      color: rgba(255, 215, 0, .5);
      top: 10px;
      right: 15px;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      border: 3px solid goldenrod;
      height: 32px;
      width: 84px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: 'ON';
      font-family: Arial;
      color: gold;
      line-height: 28px;
      text-indent: 100px;
      background: goldenrod;
      overflow: hidden;
      box-shadow: none;
      border-radius: 14px;
      transform: translateX(-50px);
      transition: all 0.4s 0.2s, width 0.2s linear, text-indent 0.4s linear;
      text-align: center;
      top: 5px;
      right: 6px;
      width: 28px;
      height: 28px;
      position: absolute;
      z-index: 2;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      border-color: goldenrode;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: goldenrod;
      transform: translateX(0px);
      transition: all 0.4s, width 0.2s linear 0.4s, text-indent 0.3s linear 0.4s;
      width: 78px;
      text-indent: 0;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle:before,
    .toggle:after {
      position: absolute;
      top: 0;
      z-index: 1;
      height:32px;
      line-height: 32px;
      font-weight: 600;
      font-size: 12px;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
    .toggle:before {
      content: 'ON';
      left: 10px;
      color: goldenrod;
    }
    .toggle:after {
      content: 'OFF';
      right: 10px;
      color: darkgoldenrod;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      background: rgba(255, 215, 1, .2);
      height: 32px;
      box-shadow: 0 0 1px 2px goldenrod;
      width: 90px;
      display: inline-block;
      transition: 0.1s linear;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      background-color: darkgoldenrod;
      background-size: 100%;
      border-radius: 0;
      width: 45px;
      height: 32px;
      left: 0;
      top: 0;
      z-index: 5;
      transition: 0.1s linear;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: palegoldenrod;
      left: 45px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 32px;
      height: 64px;
      background: goldenrod;
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      box-shadow: 0 0 4px rgba(255, 215, 0, .4);
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      left: 1px;
      top: 2px;
      z-index: 2;
      background: gold;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      top: 32px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 18px;
      height: 64px;
      background: rgba(255, 215, 0, .5);
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      box-shadow:inset 0 0 4px rgba(255, 215, 0, .4), inset 0 0 palegoldenrod;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      left: -6px;
      top: 0px;
      z-index: 2;
      box-shadow: 0 1px 10px rgba(255, 215, 0, .5);
      background: gold;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 0 0 4px rgba(255, 215, 0, .4), inset 0 32px goldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      top: 32px;
      box-shadow: 0 -1px 10px rgba(255, 215, 0, .5);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 32px;
      height: 60px;
      background: linear-gradient(gold, gold) no-repeat center;
      background-size: 2px 64px;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      left: 0;
      top: 0px;
      z-index: 2;
      background: goldenrod;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background-image: linear-gradient(rgba(255, 215, 0, .5), rgba(255, 215, 0, .5))
    }
    .toggle input[type="checkbox"]:checked + label:after {
      top: 28px;
      background: gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
    }
    .toggle label:before {
      content: '';
      width: 32px;
      height: 64px;
      position: relative;
      border-radius: 4px;
      border: 2px solid palegoldenrod;
      background: goldenrod;
      display: inline-block;
      transition: 0.25s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      border-radius: 4px;
      background: darkgoldenrod;
      width: 28px;
      height: 28px;
      left: 4px;
      top: 4px;
      z-index: 2;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: goldenrod;
      transform: translateY(32px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 72px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      width: 36px;
      height: 72px;
      border: 1px solid gold;
      box-sizing:border-box;
      border-radius: 50px;
      transition: 0.2s ease-in;
      background: gold;
      box-shadow: inset 0 0 8px palegoldenrod;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      box-sizing:border-box;
      width: 36px;
      height: 36px;
      border: 6px solid goldenrod;
      border-radius: 50px;
      background: gold;
      box-shadow: 0 2px 5px rgba(255, 215, 0, .7);
      background: palegoldenrod;
      background: linear-gradient(palegoldenrod 0%, gold 100%);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow:inset 0 0 8px gba(255, 215, 0, .2), inset  0 36px darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translateY(36px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      height: 72px;
      display: flex;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing:border-box;
    }
    .toggle label:before {
      content: '';
      display: inline-block;
      width: 24px;
      height: 72px;
      border: 1px solid gold;
      box-sizing:border-box;
      border-radius: 50px;
      transition: 0.2s ease-in;
      background: darkgoldenrod;
      box-shadow: inset 0 0 8px rgba(255, 215, 0, .4),  0 0 0 4px palegoldenrod, inset  0 0 goldenrod;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      box-sizing:border-box;
      width: 24px;
      height: 36px;
      border: 6px solid darkgoldenrod;
      border-radius: 50px;
      background: gold;
      box-shadow: 0 2px 5px goldenrod;
      background: rgba(255, 215, 0, .2);
      background: linear-gradient(rgba(255, 215, 0, .2) 0%, goldenrod 100%);
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 0 0 8px rgba(255, 215, 0, .5),  0 0 0 4px goldenrod, inset  0 36px palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translateY(36px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 72px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 36px;
      height: 72px;
      border-radius: 20px;
      position: relative;
      display: inline-block;
      transition: 0.3s ease-in;
      box-sizing: border-box;
      background-color: rgba(255, 215, 0, .2);
      box-shadow: 0 0 0 2px darkgoldenrod, 0 0 10px darkgoldenrod;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      background: gold;
      border-radius: 20px;
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: translate(3px, 3px) rotate(0deg);
      transition: 0.3s ease-in;
      transform-origin: 33px 33px;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: translate(3px, 3px) rotate(-90deg);
      background: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      transform:  rotate(180deg);
      background: palegoldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 28px;
      height: 60px;
      background: linear-gradient(goldenrod, goldenrod) no-repeat center;
      background-size: 2px 64px;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: '';
      position: absolute;
      width: 28px;
      height: 28px;
      border: 6px solid gold;
      border-radius: 50%;
      left: 0;
      top: 0;
      z-index: 2;
      background: goldenrod;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background-image: linear-gradient(gold, gold)
    }
    .toggle input[type="checkbox"]:checked + label:after {
      top: 32px;
      border-color: goldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: block;
      color: gold;
      box-sizing: border-box;
    }
    .toggle label:first-line  {
      color: goldenrod;
    }
    .toggle label:before {
      content: "FF N";
      font-family: arial;
      font-size: 24px;
      font-weight: 800;
      width: 50px;
      height: 60px;
      display: block;
      box-sizing: border-box;
      padding-left: 28px;
      padding-top: 3px;
      margin-right: 10px;
      line-height: 28px;
      background-image: radial-gradient(circle 13px, palegoldenrod 100%, transparent 0), radial-gradient(circle 13px, palegoldenrod 100%, transparent 0), linear-gradient(palegoldenrod, palegoldenrod);
      background-repeat: no-repeat;
      background-size: auto auto, auto auto, 26px 28px;
      background-position: -12px -15px, -12px 15px, 0px 15px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      width: 22px;
      height: 22px;
      border: 4px solid goldenrod;
      border-radius: 50%;
      left: 2px;
      top: 5px;
      z-index: 2;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      top: 33px;
      border-color: darkgoldenrod;
    }`,
  },

  {
    css: `.toggle {
      display: inline-block;
      position: relative;
      border-radius: 40px;
      height: 50px;
      width: 125px;
      background: goldenrod;
      transition: 0.2s ease-in;
      border: 1px solid palegoldenrod;
      box-sizing: border-box;
    }
    .toggle:hover {
      box-shadow: 0 2px 8px rgba(255, 215, 0, 0.15);
    }
    .toggle input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 6;
      opacity: 0;
      cursor: pointer;
    }
    .toggle label {
      height: 50px;
      width: 50px;
      position: absolute;
      border-radius: 50%;
      border: 10px solid darkgoldenrod;
      right: 0;
      box-sizing: border-box;
      transition: transform 0.25s 0.2s ease-out , border 0.2s ease-out , right 0.2s ease-out;
      transform: rotate(-135deg);
    }
    .toggle label:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 100%;
      width: 10px;
      height: 25px;
      background: darkgoldenrod;
      box-sizing: border-box;
      transform: translateX(-50%);
      transition: 0.2s ease-out;
    }
    .toggle label:before {
      content: '';
      position: absolute;
      box-sizing: border-box;
      border-bottom: 10px solid darkgoldenrod;
      border-right: 10px solid darkgoldenrod;
      top: 37px;
      left: 3px;
      width: 25px;
      height: 25px;
      transform: rotate(45deg);
      transition: 0.2s ease-out;
    }
    .toggle input:checked + label {
      border-color: gold;
      right: 75px;
      transform: rotate(0deg);
    }
    .toggle input:checked + label:after {
      background: gold;
      height: 35px;
    }
    .toggle input:checked + label:before {
      border-right: none;
      border-color: gold;
      transform: rotate(0deg);
      top: 32px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 70px;
      height: 40px;
      background: goldenrod;
      border: 2px solid darkgoldenrod;
      box-shadow: inset -30px 0 0 palegoldenrod;
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      transition: 0.25s ease-in;
    }
    .toggle label:after {
      content: '';
      width: 20px;
      height: 20px;
      position: absolute;
      left: 10px;
      top: 10px;
      border-radius: 50%;
      background: goldenrod;
      box-shadow: inset -8px -5px gold;
      transition: 0.2s ease-in-out;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 30px 0 0 gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      box-shadow: inset 0 0 0 2px goldenrod;
      background: gold;
      left: 39px;
      top: 8px;
      border: 2px dashed goldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 70px;
      height: 40px;
      background: gold;
      border: 2px solid gold;
      box-shadow: inset -30px 0 0 goldenrod;
      position: relative;
      display: inline-block;
      border-radius: 20px;
      box-sizing: border-box;
      transition: 0.25s ease-in;
    }
    .toggle label:after {
      content: "";
      width: 4px;
      height: 4px;
      position: absolute;
      left: 12px;
      top: 15px;
      background: goldenrod;
      border-radius: 7px;
      border: 5px solid darkgoldenrod;
      transition: 0.2s ease-in-out;
      box-shadow: -2px -4px 0 -2px gold, 0px -8px 0 -4px gold, 0px -8px 0 -2px darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 30px 0 0 goldenrod;
      border-color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      left: 45px;
      border-color: darkgoldenrod;
      box-shadow: 0px -8px 0 -4px gold, 
      0px -8px 0 -2px darkgoldenrod;
    }`
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      position: relative;
      display: inline-block;
      background: #ffed00;
      border-radius: 46px;
      border: 2px solid #ffd000;
      transition: 0.2s ease-in;
      box-sizing: border-box;
    }
    .toggle label:after {
      content: '🔔';
      position: absolute;
      width: 32px;
      height: 32px;
      left: 8px;
      top: 6px;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 30px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: rgba(255, 215, 0, .2);
      border-color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: '🔕' ;
      transform: translatex(34px);
    }`
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      position: relative;
      display: inline-block;
      background: #ffed00;
      border-radius: 46px;
      border: 2px solid #ffd000;
      box-sizing: border-box;
    }
    .toggle label:after {
      content: '😞';
      position: absolute;
      width: 32px;
      height: 32px;
      left: 4px;
      top: 6px;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 32px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: '😊';
      transform: rotate(360deg);
      left: 48px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      position: relative;
      display: inline-block;
      background: #ffed00;
      border-radius: 46px;
      border: 2px solid #ffd000;
      box-sizing: border-box;
    }
    .toggle label:after {
      content: '👎';
      position: absolute;
      width: 32px;
      height: 32px;
      left: 4px;
      top: 6px;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 32px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      transform: rotateX(180deg) translate(-3px , 3px);
      left: 48px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
      height: 36px;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      height: 100%;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 80px;
      height: 8px;
      position: relative;
      display: inline-block;
      box-shadow: inset 0 0 rgba(255, 215, 0, .5);
      background: rgba(255, 215, 0, .1);
      border-radius: 46px;
      border: 1px solid palegoldenrod;
      transition: 0.2s cubic-bezier(0.4, 0, 1, 1);
      box-sizing: border-box;
    }
    .toggle label:after {
      content:'🔇' ;
      line-height: 1;
      position: absolute;
      left: 0;
      top: -2px;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 32px;
      box-sizing: border-box;
      transition: 0.2s cubic-bezier(0.4, 0, 1, 1);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 80px 0 rgba(255, 215, 0, .2);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: '🔊' ;
      transform: translatex(60px);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '';
      width: 84px;
      height: 42px;
      position: relative;
      display: inline-block;
      border:2px solid rgba(255, 215, 0, .5);
      border-radius: 20px;
      box-sizing: border-box;
    }
    .toggle label:after {
      content: '🔓';
      position: absolute;
      width: 32px;
      height: 32px;
      left: 6px;
      top: 6px;
      z-index: 2;
      display: grid;
      place-content: center;
      font-size: 32px;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      border:2px solid rgba(255, 215, 0, .2);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: '🔒';
      left: 48px;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 28px;
      height: 28px;
      background: palegoldenrod;
      margin-right: 5px;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 10px;
      top: 5px;
      z-index: 2;
      width: 8px;
      height: 16px;
      border-bottom: 2px solid palegoldenrod;
      border-right: 2px solid palegoldenrod;
      transform: rotate(45deg);
      box-sizing: border-box;
      opacity: 0;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background-color: rgba(255, 215, 0, .5);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      opacity: 1;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 26px;
      height: 26px;
      margin-right: 5px;
      border-radius: 4px;
      box-sizing: border-box;
      border: 2px solid palegoldenrod;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 10px;
      top: 5px;
      z-index: 2;
      width: 8px;
      height: 16px;
      border-bottom: 2px solid palegoldenrod;
      border-right: 2px solid palegoldenrod;
      transform: rotate(45deg);
      box-sizing: border-box;
      opacity: 0;
      transition: 0.2s 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background-color: darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      opacity: 1;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 26px;
      height: 26px;
      margin-right: 5px;
      background: transparent;
      box-sizing: border-box;
      border: 2px solid darkgoldenrod;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 13px;
      top: -2px;
      z-index: 2;
      width: 10px;
      height: 22px;
      border-bottom: 3px solid transparent;
      border-right: 3px solid transparent;
      box-shadow: 0 0 transparent;
      background: transparent;
      transform: rotate(45deg);
      box-sizing: border-box;
      transition: background 0.2s ease-in, box-shadow 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      border-color: darkgoldenrod;
      box-shadow: 6px 0 #333;
      background: #333;
      transition: border 0.3s ease-in;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 26px;
      height: 26px;
      margin-right: 5px;
      background: rgba(255, 215, 0, .2);
      border-radius: 6px;
      box-sizing: border-box;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 5px;
      top: 14px;
      z-index: 2;
      width: 16px;
      height: 0px;
      border-bottom: 2px solid palegoldenrod;
      border-left: 2px solid palegoldenrod;
      transform: translateY(0px) rotate(0deg);
      box-sizing: border-box;
      transition: 0.2s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }
    .toggle input[type="checkbox"]:checked + label:after {
      height: 8px;
      transform: translateY(-5px) rotate(-45deg);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      background: rgba(255, 215, 0, .5);
      box-shadow: -8px -4px 8px 0px rgba(255, 215, 0, .1), 8px 4px 12px 0px rgba(255, 215, 0, .1);
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
      width: 32px;
      height: 32px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 8px;
      top: 14px;
      z-index: 2;
      width: 16px;
      height: 8px;
      transform: translateY(-5px) rotate(-45deg);
      border-bottom: 2px solid gold;
      border-left: 2px solid gold;
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: palegoldenrod;
      box-shadow: 4px 4px 4px 0px palegoldenrod inset, -4px -4px 4px 0px palegoldenrod inset;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      border-color: goldenrod;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      background: rgba(255, 215, 0, .5);
      box-shadow: -8px -4px 8px 0px rgba(255, 215, 0, .1), 8px 4px 12px 0px palegoldenrod;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 8px;
      top: 8px;
      z-index: 2;
      width: 16px;
      height: 16px;
      border-radius: 4px;
      background: rgba(255, 215, 0, .2);
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: goldenrod;
      box-shadow: 4px 4px 4px 0px rgba(255, 215, 0, .1) inset, -4px -4px 4px 0px rgba(255, 215, 0, .2) inset;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      background: rgba(255, 215, 0, .7);
      box-shadow: -8px -4px 8px 0px rgba(255, 215, 0, .1), 8px 4px 12px 0px palegoldenrod;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 8px;
      top: 8px;
      z-index: 2;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: rgba(255, 215, 0, .7);
      box-sizing: border-box;
      transition: 0.2s ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: palegoldenrod;
      box-shadow: 4px 4px 4px 0px rgba(255, 215, 0, .2) inset, -4px -4px 4px 0px rgba(255, 215, 0, .2) inset;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      background: gold;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      background: rgba(255, 215, 0, .2);
      box-shadow: 0 0 0 0 rgba(255, 215, 0, .1) inset;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      box-sizing: border-box;
      border: 1px solid palegoldenrod;
      width: 32px;
      height: 32px;
      transition: 0.3s cubic-bezier(1, 0.19, 0, 1.84);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
      border-color: darkgoldenrod;
      box-shadow:0 0 0 6px palegoldenrod inset;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 26px;
      height: 26px;
      margin-right: 5px;
      background: gold;
      border-radius: 50%;
      box-sizing: border-box;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 5px;
      top: 14px;
      z-index: 2;
      width: 16px;
      height: 0px;
      border-bottom: 2px solid darkgoldenrod;
      border-left: 2px solid darkgoldenrod;
      transform: translateY(0px) rotate(0deg);
      box-sizing: border-box;
      transition: 0.2s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: gold;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      height: 8px;
      transform: translateY(-5px) rotate(-45deg);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 26px;
      height: 26px;
      margin-right: 5px;
      box-shadow: 0 0 0 2px gold , inset 0 0 0 2px gold;
      border-radius: 50%;
      box-sizing: border-box;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 5px;
      top: 14px;
      z-index: 2;
      width: 16px;
      height: 0px;
      border-bottom: 2px solid gold;
      border-left: 2px solid gold;
      transform: translateY(0px) rotate(0deg);
      box-sizing: border-box;
      transition: 0.2s 0.1s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: 0 0 0 2px darkgoldenrod , inset 0 0 0 15px darkgoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      height: 8px;
      transform: translateY(-5px) rotate(-45deg);
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 26px;
      height: 26px;
      margin-right: 5px;
      border: 2px solid gold;
      border-radius: 50%;
      box-sizing: border-box;
      display: inline-block;
      transition: 0.2s ease-in;
    }
    .toggle label:after {
      content: "";
      position: absolute;
      left: 5px;
      top: 14px;
      z-index: 2;
      width: 16px;
      height: 0px;
      border-bottom: 2px solid transparent;
      border-left: 2px solid transparent;
      transform: translateY(0px) rotate(0deg);
      box-sizing: border-box;
      transition: 0.2s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    }
    .toggle input[type="checkbox"]:checked + label:before {
      background: rgba(255, 215, 0, .1);
      animation: 0.3s splash ease-in;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      height: 8px;
      border-color: gold;
      transform: translateY(-5px) rotate(-45deg);
    }
    @keyframes splash{
      0% {box-shadow:  0 0 0 0 rgba(255, 215, 0, 1)}
      50% {box-shadow: 0 0 0 10px rgba(255, 215, 0, 0.5)}
      100% {box-shadow: 0 0 0 20px rgba(255, 215, 0, 0)}
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '🔔';
      font-size: 36px;
      position: relative;
      display: inline-block;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      content: '🔕';
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '🔈';
      font-size: 36px;
      position: relative;
      display: inline-block;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      content: '🔇';
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '🔓';
      font-size: 36px;
      position: relative;
      display: inline-block;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      content: '🔒';
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '👎';
      font-size: 36px;
      position: relative;
      display: inline-block;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      content: '👍';
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 64px;
      height: 64px;
      position: relative;
      display: inline-block;
      border: 1px solid transparent;
      transition: 0.2s ease-in;
      box-sizing: border-box;
      clip-path: polygon(48.595% 85.365%, 15.785% 52.815%, 15.58945% 52.6185%, 12.68962% 48.99466%, 12.305% 48.375%, 10.57963% 44.86051%, 9.35896% 40.38282%, 9.08571% 35.74977%, 9.76901% 31.15918%, 11.37828% 26.80595%, 13.84412% 22.87395%, 15.775% 20.7%, 17.05533% 19.52258%, 20.87248% 16.88208%, 25.14556% 15.07038%, 29.69731% 14.16234%, 31.94% 14.055%, 34.33933% 14.174%, 38.88594% 15.10612%, 43.14179% 16.95734%, 46.93771% 19.62896%, 50% 22.815%, 50.13928% 22.64012%, 53.40377% 19.34025%, 57.24963% 16.74118%, 61.54157% 14.97537%, 66.10584% 14.13355%, 68.06% 14.055%, 70.74723% 14.20914%, 75.28062% 15.20472%, 79.51742% 17.09965%, 83.2818% 19.81486%, 84.225% 20.7%, 86.42617% 23.22899%, 88.81355% 27.2091%, 90.33651% 31.59327%, 90.92925% 36.19641%, 90.56441% 40.82313%, 89.25522% 45.27574%, 87.69% 48.385%, 87.0678% 49.36971%, 84.215% 52.82%, 51.405% 85.37%, 51.05969% 85.64527%, 48.595% 85.365%, 31.94% 18.05%);
      background-color: gold;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 0 -80px red;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: "";
      width: 64px;
      height: 64px;
      position: relative;
      display: inline-block;
      border: 1px solid transparent;
      transition: 0.2s ease-in;
      box-sizing: border-box;
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      background-color: palegoldenrod;
    }
    .toggle input[type="checkbox"]:checked + label:before {
      box-shadow: inset 80px 0 #FFCA28;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '📷';
      font-size: 36px;
      position: relative;
      display: inline-block;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: '';
      position: absolute;
      left: 17px;
      top: 5px;
      width: 4px;
      height: 45px;
      transform: rotate(-45deg);
      background: red;
      box-sizing: border-box;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '📱';
      font-size: 36px;
      position: relative;
      display: inline-block;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: '';
      position: absolute;
      left: 15px;
      top: 4px;
      width: 4px;
      height: 45px;
      transform: rotate(-45deg);
      background: red;
      box-sizing: border-box;
    }`,
  },

  {
    css: `.toggle {
      position: relative;
      box-sizing: border-box;
    }
    .toggle input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
    .toggle label {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
    .toggle label:before {
      content: '🚬';
      font-size: 36px;
      position: relative;
      box-sizing: border-box;
      display: inline-block;
    }
    .toggle input[type="checkbox"]:checked + label:after {
      content: '❌';
      position: absolute;
      font-size: 20px;
      left: 9px;
      top: 24px;
      box-sizing: border-box;
    }`,
  },
];