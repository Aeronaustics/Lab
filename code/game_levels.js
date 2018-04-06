var GAME_LEVELS = [
  ["                                                                                                                                                                                            ",
   "                                                                                                                                                                                            ",
   "                                                                                                                                                                                            ",
   "                                                                                                                                                                                            ",
   "                                                                                                                                                                                          x ",
   "                                                                                                                                                                                          x ",
   "                xx                                                                                                                                                                        x ",
   "                                                                                                                                                                                          x ",
   "                                                                                                                                   o                                                      x ",
   "          k        x     o                                                                                                                                                    xx          x ",
   "                s                                                      x       =   =                    x                                                                    xxx          x ",
   "          x                                                                  xxxxxoxxx                                                                                      xxxx          x ",
   "  xx           t  t                                        xxx                                                                                                             xxxxx          x ",
   "  x                    xoxox                      xxx      x x        xxx                  x     xx           xffx               xx  x                  xxxx              xxxxxx          x ",
   "  x                x                     xxx      x x      x x                                               xx  xx             xxx  xx                                  xxxxxxx          x ",
   "  x                f            xxx      x x      x x      x x                                              xxx  xxx           xxxx  xxx       xxx        o        xxx  xxxxxxxx      g   x ",
   "  x  @             f       =    x x      x x =    x x = =  x x                             =          =    xxxxooxxxx         xxxxx  xxxx      x x            =  = x x xxxxxxxxx          x ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx xxxxx  xxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxx!xxxxxxxxxx ",
   "                                                                 x  x           x   x                                             x  x                                         xxx          ",
   "                                                                 x!!x           x!!!x                                             x  x                                                      ",
   "                                                                 x!!x           x!!!x                                             x!!x                                                      ",
   "                                                                 xxxx           xxxxx                                             xxxx                                                      ",
   "                                                                                                                                                                                            ",
   "                                                                                                                                                                                            "],
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                         xxs xx                   xxs xx                     x                                 x",
   "                         xx  xx                   xx  xx                     x                o   o   o        x",
   "                                                                             x                                 x",
   "                                                                                                               x",
   "                                                                                                               x",
   "                                                                                         xxxxxxxxxxxxxxxxxxx   x",
   " @                        t  t                     t  t                             x                      x   x",
   "xxxx                                                                                                       x   x",
   "xxxxxx                               xxxxxx                               xxxx                    k        x   x",
   "xxxxxxxx                            xxxxxxxx        xx                  xxxxxx                             x   x",
   "xxxxxxxxxx                xxxx     xxxxxxxxxx       xx                xxxxxxxx                             x   x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxs xxxxxxxxxxxxxxxxx x",
   "                           xx             xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxs xxxx           xx  xx                x",
   "                           xx             xxxxxxxxxxxxxxxxxxxxxxxxs xxxx  xxxx                                 x",
   "                           xx       o     xxxxxxxxxxxxxxxxxxxxxxxx  xxxx                                       x",
   "                           xx             xxxxs xxxxxxxxxxxxs xxxx  xxxx                                       x",
   "                           xx             xxxx txxxxxxxxxxxx  xxxx        t                                    x",
   "                                    x     xxxx  xxxxxxxxxxxx  xxxx  t                     t  t                 x",
   "     g                                          xxxxxxxxxxxx  t                  xx      xxxxxx     xx         x",
   "                                                                                                               x",
   "              =            xx                                                                                  x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    ^          ^    xx       x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!xx      x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                                    ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "                     x           x          =               x                                                       ",
   "                                                                    xxx                                             ",
   "                            x                                                                                       ",
   "       g         xx                            x        x                    k      xx   x      x                   ",
   "                                      x                                             s                               ",
   "      xxxx                                                                   x                          xx          ",
   "                                                                                                                    ",
   "                                                                                                                    ",
   "                                                                                   t  t                             ",
   "                    xxxxx                                   xxxxx                                           xxxxx   ",
   "  @                 x   x                                   x   x                                           x   x   ",
   "                    x   x      xxxxx              xxxxx     x   x         xxxxxxxxx     xxxxxxxxxx          x   x   ",
   " xxxx xxxx xxxx     x   x      x   x              x   x     x   x         xxxx     xfffx                    x   x   ",
   " xxxx xxxx xxxx     x   x      x   x     xxxxx    x   x     x   x         xxxx     xooox          xxxx      x   x   ",
   " xxxx xxxx xxxx     x   x      x   x     x   x    x   x     x   x         xxxx     x   x          xxxx      x   x   ",
   " xxxx xxxx xxxx     x   x      x   x     x   x    x   x     x   x                  x   x          xxxxx     x   x   ",
   "                    x   x      x   x     x   x    x   x     x   x         xxxx     x   x          xxxx      x   x   ",
   "                    x   x      x   x     x   x    x   x     x   x         xxxx     x   f                   xx   x   ",
   "                    x   x      x   x     x   x    x   x     x   x         xxxx     x   f                    x   x   ",
   "                    x   x      x   x     x   x    x   x     x   x         xxxx     xxxxx                    x   x   ",
   "                            ^         ^                 ^                                   xxx   xxxx              "],
   ["                                                                                                                    ",
    "                                                                                                                    ",
    "                                                                                                                    ",
    "                                                                                                                    ",
    "        xx       xx     xxxxx     xx      xx          xx                 xx    xxxxxxxxxx    xx          xx         ",
    "        xx       xx    xxxxxxx    xx      xx         xx                   xx   xxxxxxxxxx    xxxx        xx         ",
    "        xx       xx   xx     xx   xx      xx         xx                   xx       xx        xx xx       xx         ",
    "        xx       xx  xx       xx  xx      xx         xx                   xx       xx        xx  xx      xx         ",
    "         xx     xx   xx       xx  xx      xx          xx                 xx        xx        xx   xx     xx         ",
    "          xx   xx    xx       xx  xx      xx           xx      xxx      xx         xx        xx    xx    xx         ",
    "           xxxxx     xx       xx  xx      xx            xx     xxxx    xx          xx        xx     xx   xx         ",
    "            xxx       xx     xx   xx      xx            xx   xx   xx   xx          xx        xx      xx  xx         ",
    "            xxx        xxxxxxx     xxxxxxxx              xx xx     xx xx       xxxxxxxxxxx   xx       xxxxx         ",
    "            xxx         xxxxx       xxxxxx                xxx       xxx        xxxxxxxxxxx   xx        xxxx         ",
    "                                                                                                                    ",
    "   @                                                                                                                ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "                                                                                                                    "],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
