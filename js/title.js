(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  // symbols:

  (lib.tt002 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f('#057EC0')
      .s()
      .p(
        'AXvBAQgVgbAAgiQAAgYAMgXQAOgcAagOQAUgMAcAAQALAAAIABQAJACAQAGIAKADQADAAACgDQABgCABgHIAFAAIAFA7IgFAAQgIgWgLgLQgRgRgaAAQglAAgTAdQgPAYAAAiQAAAaAKAWQALAXARAKQAQALATAAQAKAAAKgDQAJgDAJgFIAAg3QAAgOgBgEQgDgFgFgBQgEgDgMAAIAAgFIBKAAIAAAFIgEAAQgKAAgFAHQgCAFAAAPIAAA6QgRAJgPAEQgPAEgUAAQg3AAgdgjgANLBYQgQgKgGgTQgFgMAAgiIAAhKQAAgRgEgFQgGgGgLAAIgHAAIAAgFIBSAAIAAAFIgGAAQgMAAgFAHQgEAGAAAPIAABSQAAALACAPQACAOAFAIQAGAIAKAFQAJAFAQAAQASAAAOgIQAQgIAFgNQAFgMAAgfIAAhMQAAgRgEgFQgGgGgKAAIgHAAIAAgFIBDAAIAAAFIgHAAQgLAAgHAJQgCAFAAAQIAABMQAAAcgGAQQgGAQgQALQgRALgcAAQgfAAgRgLgAIhBdQgHgHAAgIQAAgHAEgEQAEgEAGAAQAFAAAEADQADADAFANQAEAHAFAAQADAAAEgEQADgFAAgMIAAiBQAAgOgCgFQgCgDgEgDQgGgDgGAAIgHAAIAAgFIBRAAIAAAFIgHAAQgMAAgFAHQgDAEAAARIAABcQAAAWgFANQgEANgMAKQgMAKgQAAQgNAAgIgGgA/DBAQgTgaAAgjQAAgcAMgXQAOgYAWgNQAWgNAaAAQAVAAAUAKQAGADADAAQAEAAACgDQADgEACgGIAFAAIAEBAIgEAAQgJgdgPgNQgRgMgWAAQgTAAgPAJQgPAKgKAVQgIAVAAAeQAAAaAIATQAIATARAKQARAKAVAAQATAAAOgIQAOgIAQgYIAFADQgPAagSALQgUAMgZAAQgwAAgagjgAhNBiIh9iYIAAB0QAAARADAFQAGAGALAAIAHAAIAAAFIhCAAIAAgFIAGAAQAMAAAFgIQAEgEAAgQIAAiDQgJgKgEgDQgEgDgIgDIgNgBIAAgFIA0AAIB0CNIAAhsQAAgSgEgEQgFgGgLAAIgHAAIAAgFIBCAAIAAAFIgGAAQgMAAgGAHQgDAFAAAQIAACfgAc1BfIAAgFIAGAAQAHAAAGgEQAFgCABgEQACgFAAgOIAAh6QAAgSgEgEQgFgGgMAAIgGAAIAAgFICSAAIACApIgGAAQgDgPgDgFQgEgGgGgDQgHgCgOAAIgzAAIAABLIApAAQARAAAFgFQAHgGABgQIAFAAIAABBIgFAAQgCgOgCgEQgDgFgFgDQgGgCgMAAIgpAAIAAA+QAAANABADQABACACACQADABAIAAIAhAAQAQAAAGgCQAIgCAHgHQAIgIAKgSIAFAAIgQAwgAR3BfIAAgFIAGAAQANAAAEgIQADgFABgQIAAh6QAAgRgEgFQgGgGgLAAIgGAAIAAgFIBMAAQAsAAAVAKQAXAJANAXQAOAWAAAeQAAAmgZAbQgbAeg2AAgASthPIAACgQARAEANAAQAgAAAWgXQAVgXAAgnQAAgmgVgXQgWgWghAAQgNAAgQAEgAoxBfIAAgFIAHAAQAHAAAGgEQAEgCACgEQACgFgBgOIAAh6QABgSgEgEQgFgGgMAAIgHAAIAAgFICSAAIADApIgGAAQgDgPgDgFQgDgGgIgDQgFgCgPAAIg0AAIAABLIAqAAQARAAAFgFQAHgGABgQIAFAAIAABBIgFAAQgCgOgCgEQgCgFgGgDQgGgCgMAAIgqAAIAAA+QAAANABADQACACADACQADABAHAAIAhAAQAQAAAGgCQAIgCAHgHQAIgIAKgSIAFAAIgRAwgAtxBfIAAgFIB5itIg9AAQgOAAgHAEQgHADgDAGQgEAGgDARIgGAAIAFgvICMAAIh9CxIBOAAQASAAAJgIQAKgHAHgYIAFAAIgJAzgAxdBfIAAgFIAHAAQAMAAAFgHQADgFAAgRIAAh6QAAgOgCgFQgBgDgEgDQgHgDgGAAIgHAAIAAgFIBRAAIAAAFIgGAAQgMAAgFAHQgEAEAAARIAAB6QAAAPACAEQABAEAFACQAGAEAHAAIAGAAIAAAFgA10BfIAAgFIAHAAQAMAAAFgIQADgEAAgQIAAiQIgWAAQgOAAgFACQgIACgFAIQgFAIgBAMIgGAAIADgsICbAAIACAsIgGAAQgBgLgCgFQgFgJgHgDQgHgEgMAAIgbAAIAACQQAAARAEAFQAGAGALAAIAGAAIAAAFgA6LBfIAAgFIAHAAQAMAAAFgHQADgFAAgRIAAh6QAAgOgCgFQgBgDgEgDQgHgDgGAAIgHAAIAAgFIBRAAIAAAFIgGAAQgMAAgFAHQgEAEAAARIAAB6QAAAPACAEQABAEAFACQAGAEAHAAIAGAAIAAAFg'
      );
    this.shape.setTransform(-7.1, 0.2);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1119));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-207.8, -9.7, 401.4, 19.9);

  (lib.t7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('AgpAqQgFgQAcgbQAegfgBgYIANAAQALAcAEAVIAEAaQACASgnAPQgOAFgLAAQgRAAgFgPg');
    this.shape.setTransform(9.3, 13.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#0948A6').s().p('AgdBoQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgMARgcQAVgggCggIANAAQAMAcADAVIAEAaQAFAsgPAiQgNAggaAPQgQAJgQAAQgHAAgIgBg');
    this.shape_1.setTransform(6.9, 18.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#0948A6').s().p('AjjBoQgbgHgIgZQgIgXAMgUQAKgSAXgLQAagMATgcQAVgggCggIANAAQALAcAEAVIEyAAIAZgZIBEAvQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgCABgWAAIlyAAQAEAsgOAiQgOAggZAPQgQAJgSAAQgHAAgIgBg');
    this.shape_2.setTransform(26.6, 18.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#0948A6').s().p('AmPBrQgbgHgJgYQgHgYAMgUQAKgRAWgLQAbgMASgdQAVgfgCghIANAAQAMAcADAVIJQAAIA3g4IBiBdQgGAGgIACQgHACgQABQgXAWgkAaQgkAageAQIgIgHQAJgdAOhLIpSAAQAFArgPAjQgNAfgaAPQgQAKgRAAQgIAAgHgCg');
    this.shape_3.setTransform(43.9, 18);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#0948A6').s().p('AmPCPQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgbQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBdQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIpSAAQAFAtgPAiQgNAggaAPQgQAKgRAAQgIAAgHgCgAgwglQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg');
    this.shape_4.setTransform(43.9, 14.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmPCPQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgbQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBdQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQgWADjvgFIgCgRQA7gFA3gSQBkghAUgGInjAAQAFAtgPAiQgNAggaAPQgQAKgRAAQgIAAgHgCgAgwglQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_5.setTransform(43.9, 14.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmPCPQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgbQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBdQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABQhBAFgfABIhrADQh2AChzgCIgBgRQB2gLCJgXQCFgWBTgWInjAAQAFAtgPAiQgNAggaAPQgQAKgRAAQgIAAgHgCgAgwglQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_6.setTransform(43.9, 14.5);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmNDLIgHgbIEAAAIAhgLQApACAYAUQgEAPgVABgAmPBVQgbgHgJgZQgHgXAMgUQAKgQAWgMQAbgNASgcQAVgfgCghIANAAQAMAcADAVIJQAAIA3g4IBiBdQgGAFgIADQgHACgQABQgXAXgkAZQgkAZgeARIgIgHQAJgdAOhMIhqAAIBPBWQgRALgmgRQglAEgaACQhBAEgfABIhrADQh2AChzgCIgBgRQB2gLCJgWQCFgWBTgWInjAAQAFAtgPAiQgNAfgaAPQgQAKgRAAQgIAAgHgCgAgwheQADgbgKgdQgKgcgSgRIAHgHQBRABAlAcQAeAXgJAgQgJAfghAKQgKACgKAAQgZAAgYgTg'
      );
    this.shape_7.setTransform(43.9, 20.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmNDLIgHgbIKFAAIA4hFIAlAbQApAhAYAUQgEAPgVABgAmPBVQgbgHgJgZQgHgXAMgUQAKgQAWgMQAbgNASgcQAVgfgCghIANAAQAMAcADAVIJQAAIA3g4IBiBdQgGAFgIADQgHACgQABQgXAXgkAZQgkAZgeARIgIgHQAJgdAOhMIhqAAIBPBWQgRALgmgRQglAEgaACQhBAEgfABIhrADQh2AChzgCIgBgRQB2gLCJgWQCFgWBTgWInjAAQAFAtgPAiQgNAfgaAPQgQAKgRAAQgIAAgHgCgAgwheQADgbgKgdQgKgcgSgRIAHgHQBRABAlAcQAeAXgJAgQgJAfghAKQgKACgKAAQgZAAgYgTg'
      );
    this.shape_8.setTransform(43.9, 20.3);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmNDLIgHgbIFcAAIAAiCQh2AChzgCIgBgRQB2gLCJgWQCFgWBTgWInjAAQAFAtgPAiQgNAfgaAPQgXAOgZgGQgbgHgJgZQgHgXAMgUQAKgQAWgMQAbgNASgcQAVgfgCghIANAAQAMAcADAVIJQAAIA3g4IBiBdQgGAFgIADQgHACgQABQgXAXgkAZQgkAZgeARIgIgHQAJgdAOhMIhqAAIBPBWQgRALgmgRQglAEgaACQhBAEgfABIAACFIC+AAIA4hFIAlAbQApAhAYAUQgEAPgVABgAgwheQADgbgKgdQgKgcgSgRIAHgHQBRABAlAcQAeAXgJAgQgJAfghAKQgKACgKAAQgZAAgYgTg'
      );
    this.shape_9.setTransform(43.9, 20.3);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f('#0948A6')
      .s()
      .p(
        'Ag4ENIAAiDIACgCIgCAAIgDgBQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAgBAAIlNAAIgHgaIFcAAIAAiCQh2ADhzgDIgBgRQB2gKCJgXQCFgWBTgWInjAAQAFAsgPAjQgNAfgaAPQgXAOgZgHQgbgGgJgYQgHgXAMgVQAKgRAWgLQAbgNASgdQAVgfgCghIANAAQAMAcADAWIJQAAIA3g5IBiBeQgGAFgIADQgHACgQAAQgXAXgkAaQgkAageAQIgIgHQAJgdAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABQhBAFgfABIAACEIC+AAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAABnQgBAIgXAKQgbAMglAAgAgwihQADgbgKgdQgKgcgSgRIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_10.setTransform(43.9, 26.9);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f('#0948A6')
      .s()
      .p(
        'Ag4ENIAAiDIACgCIgCAAIgDgBQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAgBAAIlNAAIgHgaIDVAAQgOgFgQgNQACgZgJgdQgJgagOgSIAIgFQBqANATAwQAHASgKASQgKARgUAHIBfAAIAAiCQh2ADhzgDIgBgRQB2gKCJgXQCFgWBTgWInjAAQAFAsgPAjQgNAfgaAPQgXAOgZgHQgbgGgJgYQgHgXAMgVQAKgRAWgLQAbgNASgdQAVgfgCghIANAAQAMAcADAWIJQAAIA3g5IBiBeQgGAFgIADQgHACgQAAQgXAXgkAaQgkAageAQIgIgHQAJgdAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABQhBAFgfABIAACEIC+AAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAABnQgBAIgXAKQgbAMglAAgAgwihQADgbgKgdQgKgcgSgRIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_11.setTransform(43.9, 26.9);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f('#0948A6')
      .s()
      .p(
        'Ag4ENIAAiDIACgCIgCAAIgDgBQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAgBAAIlNAAIgHgaIDVAAQgOgFgQgNQACgZgJgdQgJgagOgSIAIgFQBqANATAwQAHASgKASQgKARgUAHIBfAAIAAiCQh2ADhzgDIgBgRQB2gKCJgXQCFgWBTgWInjAAQAFAsgPAjQgNAfgaAPQgXAOgZgHQgbgGgJgYQgHgXAMgVQAKgRAWgLQAbgNASgdQAVgfgCghIANAAQAMAcADAWIJQAAIA3g5IBiBeQgGAFgIADQgHACgQAAQgXAXgkAaQgkAageAQIgIgHQAJgdAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AtQgIATgdgDQg5Aug0AfIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAABnQgBAIgXAKQgbAMglAAgAAzgWIAACEIAsAAQAag9AUhNQg4AFgiABgAgwihQADgbgKgdQgKgcgSgRIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_12.setTransform(43.9, 26.9);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f('#0948A6')
      .s()
      .p(
        'Ag4ENIAAhdQgoAegwgMQgwgKAwgwIj9AAIgHgaIDVAAQgOgFgQgNQACgZgJgdQgJgagOgSIAIgFQBqANATAwQAHASgKASQgKARgUAHIBfAAIAAiCQh2ADhzgDIgBgRQB2gKCJgXQCFgWBTgWInjAAQAFAsgPAjQgNAfgaAPQgXAOgZgHQgbgGgJgYQgHgXAMgVQAKgRAWgLQAbgNASgdQAVgfgCghIANAAQAMAcADAWIJQAAIA3g5IBiBeQgGAFgIADQgHACgQAAQgXAXgkAaQgkAageAQIgIgHQAJgdAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AtQgIATgdgDQg5Aug0AfIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAABnQgBAIgXAKQgbAMglAAgAAzgWIAACEIAsAAQAag9AUhNQg4AFgiABgAgwihQADgbgKgdQgKgcgSgRIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_13.setTransform(43.9, 26.9);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmvEcQBUgfBMgvQBKguA1g0Ij9AAIgHgbIDVAAQgOgEgQgOQACgYgJgeQgJgYgOgUIAIgEQBqAOATAuQAHATgKASQgKAQgUAHIBfAAIAAiBQh2ADhzgDIgBgRQB2gKCJgXQCFgWBTgWInjAAQAFAsgPAjQgNAfgaAPQgXAOgZgGQgbgHgJgYQgHgYAMgUQAKgRAWgLQAbgNASgdQAVgfgCghIANAAQAMAcADAVIJQAAIA3g4IBiBdQgGAGgIACQgHACgQABQgXAXgkAaQgkAageAQIgIgHQAJgdAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIASgdgDQg5Aug0AeIBxAAIA4hFIAlAcQApAgAYAVQgEAPgVAAIlDAAIAABnQgBAHgXAKQgbANglAAIgTAAIAAheQhBAxhkAoIg+AXQhEAWhJAQgAAzgzIAACEIAsAAQAag8AUhNQg4AEgiABgAgwi9QADgbgKgdQgKgcgSgRIAHgGQBRAAAlAcQAeAYgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_14.setTransform(43.9, 29.7);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmvEcQBUgfBMgvQBKguA1g0Ij9AAIgHgbIDVAAQgOgEgQgOQACgYgJgeQgJgYgOgUIAIgEQBqAOATAuQAHATgKASQgKAQgUAHIBfAAIAAiBQh2ADhzgDIgBgRQB2gKCJgXQCFgWBTgWInjAAQAFAsgPAjQgNAfgaAPQgXAOgZgGQgbgHgJgYQgHgYAMgUQAKgRAWgLQAbgNASgdQAVgfgCghIANAAQAMAcADAVIJQAAIA3g4IBiBdQgGAGgIACQgHACgQABQgXAXgkAaQgkAageAQIgIgHQAJgdAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIASgdgDQg5Aug0AeIBxAAIA4hFIAlAcQApAgAYAVQgEAPgVAAIlDAAIAAAKQD1ACBSBLQAfAcgJAZQgIAYglAEIiUg/Qh9g2gfgLIAAA/QgBAHgXAKQgbANglAAIgTAAIAAheQhBAxhkAoIg+AXQhEAWhJAQgAAzgzIAACEIAsAAQAag8AUhNQg4AEgiABgAgwi9QADgbgKgdQgKgcgSgRIAHgGQBRAAAlAcQAeAYgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_15.setTransform(43.9, 29.7);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkbG9IAAlOQhEAXhJAQIgHgNQBUggBMgvQBKguA1gzIj9AAIgHgaIDVAAQgOgEgQgOQACgZgJgdQgJgagOgTIAIgFQBqAOATAwQAHATgKARQgKARgUAHIBfAAIAAiCQh2AChzgCIgBgRQB2gLCJgXQCFgWBTgWInjAAQAFAtgPAiQgNAggaAPQgXAOgZgGQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgcQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBeQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIATgdgDQg5Avg0AeIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAAAKQD1ACBSBKQAfAcgJAZQgIAZglADIiUg/Qh9g1gfgLIAAA/QgBAHgXAKQgbAMglAAIgTAAIAAhdQhBAxhkAnIA5AXIgLAaIAAETQAAAIgYALQgcAOglAAgAAzjGIAACFIAsAAQAag8AUhOQg4AEgiABgAgwlRQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_16.setTransform(43.9, 44.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkbG9IAAlOQhEAXhJAQIgHgNQBUggBMgvQBKguA1gzIj9AAIgHgaIDVAAQgOgEgQgOQACgZgJgdQgJgagOgTIAIgFQBqAOATAwQAHATgKARQgKARgUAHIBfAAIAAiCQh2AChzgCIgBgRQB2gLCJgXQCFgWBTgWInjAAQAFAtgPAiQgNAggaAPQgXAOgZgGQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgcQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBeQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIATgdgDQg5Avg0AeIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAAAKQD1ACBSBKQAfAcgJAZQgIAZglADIiMg9IBbBEQgJALgXAGIhugPIlTAAIAAETQAAAIgYALQgcAOglAAgAjdBYIA5AXIFBAAIAsgyQhhgpg1gTIAAA/QgBAHgXAKQgbAMglAAIgTAAIAAhdQhBAxhkAngAAzjGIAACFIAsAAQAag8AUhOQg4AEgiABgAgwlRQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_17.setTransform(43.9, 44.5);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkbG9IAAlOQhEAXhJAQIgHgNQBUggBMgvQBKguA1gzIj9AAIgHgaIDVAAQgOgEgQgOQACgZgJgdQgJgagOgTIAIgFQBqAOATAwQAHATgKARQgKARgUAHIBfAAIAAiCQh2AChzgCIgBgRQB2gLCJgXQCFgWBTgWInjAAQAFAtgPAiQgNAggaAPQgXAOgZgGQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgcQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBeQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIATgdgDQg5Avg0AeIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAAAKQD1ACBSBKQAfAcgJAZQgIAZglADIiMg9IBbBEQgJALgXAGIAAEEQgBAFggAJQgiAKgYAAIgTAAIAAkrIlTAAIAAETQAAAIgYALQgcAOglAAgAjdBYIA5AXIFBAAIAsgyQhhgpg1gTIAAA/QgBAHgXAKQgbAMglAAIgTAAIAAhdQhBAxhkAngAAzjGIAACFIAsAAQAag8AUhOQg4AEgiABgAgwlRQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_18.setTransform(43.9, 44.5);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkbG9IAAlOQhEAXhJAQIgHgNQBUggBMgvQBKguA1gzIj9AAIgHgaIDVAAQgOgEgQgOQACgZgJgdQgJgagOgTIAIgFQBqAOATAwQAHATgKARQgKARgUAHIBfAAIAAiCQh2AChzgCIgBgRQB2gLCJgXQCFgWBTgWInjAAQAFAtgPAiQgNAggaAPQgXAOgZgGQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgcQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBeQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIATgdgDQg5Avg0AeIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAAAKQD1ACBSBKQAfAcgJAZQgIAZglADIiMg9IBbBEQgJALgXAGIAAEEQgBAFggAJQgiAKgYAAIgTAAIAAivIlTAAIAACXQAAAIgYALQgcAOglAAgAivDqIFTAAIAAhhIlTAAgAjdBYIA5AXIFBAAIAsgyQhhgpg1gTIAAA/QgBAHgXAKQgbAMglAAIgTAAIAAhdQhBAxhkAngAAzjGIAACFIAsAAQAag8AUhOQg4AEgiABgAgwlRQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_19.setTransform(43.9, 44.5);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkbG9IAAlOQhEAXhJAQIgHgNQBUggBMgvQBKguA1gzIj9AAIgHgaIDVAAQgOgEgQgOQACgZgJgdQgJgagOgTIAIgFQBqAOATAwQAHATgKARQgKARgUAHIBfAAIAAiCQh2AChzgCIgBgRQB2gLCJgXQCFgWBTgWInjAAQAFAtgPAiQgNAggaAPQgXAOgZgGQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgcQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBeQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIATgdgDQg5Avg0AeIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAAAKQD1ACBSBKQAfAcgJAZQgIAZglADIiMg9IBbBEQgJALgXAGIAAEEQgBAFggAJQgiAKgYAAIgTAAIAAivIh0AAIAABJIhoAZIAAhiIh3AAIAACXQAAAIgYALQgcAOglAAgAAwDqIB0AAIAAhhIh0AAgAivDqIB3AAIAAhhIh3AAgAjdBYIA5AXIFBAAIAsgyQhhgpg1gTIAAA/QgBAHgXAKQgbAMglAAIgTAAIAAhdQhBAxhkAngAAzjGIAACFIAsAAQAag8AUhOQg4AEgiABgAgwlRQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_20.setTransform(43.9, 44.5);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkbG9IAAlOQhEAXhJAQIgHgNQBUggBMgvQBKguA1gzIj9AAIgHgaIDVAAQgOgEgQgOQACgZgJgdQgJgagOgTIAIgFQBqAOATAwQAHATgKARQgKARgUAHIBfAAIAAiCQh2AChzgCIgBgRQB2gLCJgXQCFgWBTgWInjAAQAFAtgPAiQgNAggaAPQgXAOgZgGQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgcQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBeQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIATgdgDQg5Avg0AeIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAAAKQD1ACBSBKQAfAcgJAZQgIAZglADIiMg9IBbBEQgJALgXAGIAAEEQgBAFggAJQgiAKgYAAIgTAAIAAivIh0AAIAABnIgnAbIi4AAIAAAVQAAAIgYALQgcAOglAAgAivFsIB3AAIAAhnIh3AAgAAwDqIB0AAIAAhhIh0AAgAivDqIB3AAIAAhhIh3AAgAjdBYIA5AXIFBAAIAsgyQhhgpg1gTIAAA/QgBAHgXAKQgbAMglAAIgTAAIAAhdQhBAxhkAngAAzjGIAACFIAsAAQAag8AUhOQg4AEgiABgAgwlRQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_21.setTransform(43.9, 44.5);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkbG9IAAlOQhEAXhJAQIgHgNQBUggBMgvQBKguA1gzIj9AAIgHgaIDVAAQgOgEgQgOQACgZgJgdQgJgagOgTIAIgFQBqAOATAwQAHATgKARQgKARgUAHIBfAAIAAiCQh2AChzgCIgBgRQB2gLCJgXQCFgWBTgWInjAAQAFAtgPAiQgNAggaAPQgXAOgZgGQgbgHgJgZQgHgXAMgUQAKgSAWgLQAbgNASgcQAVgggCggIANAAQAMAcADAVIJQAAIA3g5IBiBeQgGAFgIADQgHACgQABQgXAWgkAaQgkAageAQIgIgGQAJgeAOhMIhqAAIBPBWQgRAMgmgRQglAEgaABIB/AuQgIATgdgDQg5Avg0AeIBxAAIA4hFIAlAbQApAgAYAVQgEAPgVAAIlDAAIAAAKQD1ACBSBKQAfAcgJAZQgIAZglADIiMg9IBbBEQgJALgXAGIAAEEQgBAFggAJQgiAKgYAAIgTAAIAAgtIlTAAIAAAVQAAAIgYALQgcAOglAAgAAwFsIB0AAIAAhnIh0AAgAivFsIB3AAIAAhnIh3AAgAAwDqIB0AAIAAhhIh0AAgAivDqIB3AAIAAhhIh3AAgAjdBYIA5AXIFBAAIAsgyQhhgpg1gTIAAA/QgBAHgXAKQgbAMglAAIgTAAIAAhdQhBAxhkAngAAzjGIAACFIAsAAQAag8AUhOQg4AEgiABgAgwlRQADgagKgdQgKgcgSgSIAHgGQBRABAlAcQAeAXgJAgQgJAeghAKQgKADgKAAQgZAAgYgUg'
      );
    this.shape_22.setTransform(43.9, 44.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .to({ state: [{ t: this.shape_20 }] }, 1)
        .to({ state: [{ t: this.shape_21 }] }, 1)
        .to({ state: [{ t: this.shape_22 }] }, 1)
        .wait(478)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(5.1, 7.9, 8.6, 11.4);

  (lib.t6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('AhnAbIgIgbIBxAAIAqgaIAVAHQAZALAWAUQgDAPgVAAg');
    this.shape.setTransform(15.9, 16.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#0948A6').s().p('Ai/AwIgIgcID+AAIA0hDIAhAcQAlAfAXAVQgEAPgVAAg');
    this.shape_1.setTransform(24.7, 14.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#0948A6').s().p('Ai/BgIgIgcICPAAIAAijICGAMQgCAVgbADIAAB/IAGAAIA0hEIAhAcQAlAgAXAVQgEAPgVAAg');
    this.shape_2.setTransform(24.7, 9.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#0948A6').s().p('Ag4AHIiHAAIgIgaICPAAIAAikICGAMQgCAUgbADIAACBIAGAAIA0hEIAhAcQAlAgAXAUQgEAOgVAAIh+AAIAACVQgpAbgMAAIg0ABg');
    this.shape_3.setTransform(24.7, 18.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#0948A6').s().p('AjPC4IgHgbICuAAIAAiVIiHAAIgIgbICPAAIAAikICGAMQgCAVgbADIAACAIAGAAIA0hDIAhAcQAlAgAXAUQgEAOgVAAIh+AAIAACVQgpAagNABg');
    this.shape_4.setTransform(23.1, 18.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#0948A6').s().p('AjfC4IgHgbICvAAIAAiVIiHAAIgIgbICPAAIAAikICGAMQgCAVgcADIAACAIAGAAIA1hDIAgAcQAmAgAWAUQgDAOgWAAIh+AAIAACVIAgAAIA2hIIAjAdIA9A2QgEAQgVAAg');
    this.shape_5.setTransform(24.6, 18.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#0948A6').s().p('AgeDoIAAhiICBAOQgDATgaADIAABPgAjfB2IgHgbICvAAIAAiUIiHAAIgIgbICPAAIAAikICGAMQgCAUgcADIAACBIAGAAIA1hEIAgAcQAmAgAWAUQgDAPgWAAIh+AAIAACUIAgAAIA2hIIAjAdIA9A2QgEAQgVAAg');
    this.shape_6.setTransform(24.6, 24.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#0948A6').s().p('AgeFiIAAlXICBAOQgDAUgaADIAAFEgAjfgEIgHgaICvAAIAAiVIiHAAIgIgcICPAAIAAikICGAMQgCAVgcADIAACAIAGAAIA1hEIAgAcQAmAgAWAVQgDAPgWAAIh+AAIAACVIAgAAIA2hIIAjAdIA9A2QgEAPgVAAg');
    this.shape_7.setTransform(24.6, 37.2);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#0948A6').s().p('AgeFiIAAlXICBAOQgDAUgaADIAAB0IAWAAIAyhIIAfAeQAkAhATAVQgEAPgVAAIiFAAIAAC1gAjfgEIgHgaICvAAIAAiVIiHAAIgIgcICPAAIAAikICGAMQgCAVgcADIAACAIAGAAIA1hEIAgAcQAmAgAWAVQgDAPgWAAIh+AAIAACVIAgAAIA2hIIAjAdIA9A2QgEAPgVAAg');
    this.shape_8.setTransform(24.6, 37.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f('#0948A6')
      .s()
      .p('AgeFiIAAlXICBAOQgDAUgaADIAAB0IAWAAIAyhIIAfAeQAkAhATAVQgEAPgVAAIiFAAIAAC1gAigEQQgEgvgCicIB/AXQgGAVgcADQgDAYgXA2QgcBCgMAqQgGAXgFAAQgHAAgDg1gAjfgEIgHgaICvAAIAAiVIiHAAIgIgcICPAAIAAikICGAMQgCAVgcADIAACAIAGAAIA1hEIAgAcQAmAgAWAVQgDAPgWAAIh+AAIAACVIAgAAIA2hIIAjAdIA9A2QgEAPgVAAg');
    this.shape_9.setTransform(24.6, 37.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f('#0948A6')
      .s()
      .p('AjuG/QArhYAViIQARhzgBh6IB/AXQgGAVgdADQgJBegZBbQgoCYhXBVgAgWEPIAAlWICAAOQgDAUgaACIAABzIAXAAIAxhHIAgAdQAjAiAUAVQgEAPgVAAIiGAAIAAC0gAjXhXIgHgbICuAAIAAiUIiHAAIgIgcICPAAIAAikICGAMQgCAVgbACIAACBIAGAAIA0hEIAhAcQAlAgAXAUQgEAPgVABIh+AAIAACUIAfAAIA2hIIAjAeIA+A2QgEAPgWAAg');
    this.shape_10.setTransform(23.9, 45.5);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f('#0948A6')
      .s()
      .p(
        'AjuG/QArhYAViIQARhzgBh6IB/AXQgGAVgdADQgHBJgRBKQAaApAqAeIAAlCICAAOQgDAUgaACIAABzIAXAAIAxhHIAgAdQAjAiAUAVQgEAPgVAAIiGAAIAAC3QAXAFgQAKQgQAKghgBQhbgCgshfQgoCYhXBVgAjXhXIgHgbICuAAIAAiUIiHAAIgIgcICPAAIAAikICGAMQgCAVgbACIAACBIAGAAIA0hEIAhAcQAlAgAXAUQgEAPgVABIh+AAIAACUIAfAAIA2hIIAjAeIA+A2QgEAPgWAAg'
      );
    this.shape_11.setTransform(23.9, 45.5);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f('#0948A6')
      .s()
      .p(
        'AleG/QArhYAViIQARhzgCh6IB/AXQgGAVgcADQgHBJgRBKQAZApAqAeIAAlCICCAOQgDAUgaACIAABzIAWAAIAxhHIAfAdQAkAiATAVQgEAPgVAAIiEAAIAAC3QAmAJCPAEQB8ADBQgDIAAALQgdAIgQAZQgPAWgBAhIhzAAQiiAAhSgkQhegpgxhsQgpCYhWBVgAlIhXIgHgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAGAAIA0hEIAgAcQAmAgAWAUQgDAPgWABIh9AAIAACUIAgAAIA1hIIAjAeIA9A2QgEAPgVAAg'
      );
    this.shape_12.setTransform(35.1, 45.5);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAg'
      );
    this.shape_13.setTransform(45.1, 45.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAgAERlGIiNAAIADgbICAAAIAigZIA9AuQgFAHgwAAIgggBg'
      );
    this.shape_14.setTransform(45.1, 45.5);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAgAERjQIAAh2IiNAAIADgbICAAAIAxg3IBqBRQgMAPgdAFIAABKQgBAGgeAJQghAKgXAAg'
      );
    this.shape_15.setTransform(45.1, 45.5);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgAERgrIAAkbIiNAAIADgbICAAAIAxg3IBqBRQgMAPgdAFIAADvQgBAGgeAJQghAKgXAAgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAg'
      );
    this.shape_16.setTransform(45.1, 45.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgAERgrIAAg1IiWAAIAAgaICWAAIAAjMIiNAAIADgbICAAAIAxg3IBqBRQgMAPgdAFIAADvQgBAGgeAJQghAKgXAAgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAg'
      );
    this.shape_17.setTransform(45.1, 45.5);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgAERgrIAAg1IiHAAQgaARgaAGQgzANAAgvIAAkhIBzArIBxAAIAxg3IBqBRQgMAPgdAFIAADvQgBAGgeAJQghAKgXAAgACKh6ICHAAIAAjMIiHAAgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAg'
      );
    this.shape_18.setTransform(45.1, 45.5);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgAA6DQQgXgUAAg3IAAoRIBzArIBxAAIAxg3IBqBRQgMAPgdAFIAADvQgBAGgeAJQghAKgXAAIgRAAIAAg1IiHAAIAADMQAAASAMBmQhEAAgYgUgACKh6ICHAAIAAjMIiHAAgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAg'
      );
    this.shape_19.setTransform(45.1, 45.5);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgACWDkQhEAAgYgUQgXgUAAg3IAAoRIBzArIBxAAIAxg3IBqBRQgMAPgdAFIAADvQgBAGgeAJQghAKgXAAIgRAAIAAg1IiHAAIAADMQAAAOAGAEQAHAFAWABICPgBQANgCAxAMQA2AMAAALQAAAjgoAOQgrAPhtAAgACKh6ICHAAIAAjMIiHAAgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAg'
      );
    this.shape_20.setTransform(45.1, 45.5);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f('#0948A6')
      .s()
      .p(
        'AnCG/QArhYAViIQARhzgCh6ICAAXQgHAVgcADQgHBJgRBKQAaApApAeIAAlCICCAOQgDAUgaACIAABzIAXAAIAxhHIAfAdQAjAiAUAVQgFAPgTAAIiGAAIAAC3QBHAQCOAAQEbAABZgDIAAALQgdAIgQAZQgPAWgCAhIk6AAQihAAhTgkQhegpgxhsQgpCYhWBVgACWDkQhEAAgYgUQgXgUAAg3IAAoRIBzArIBxAAIAxg3IBqBRQgMAPgdAFIAADvQgBAGgeAJQghAKgXAAIgRAAIAAg1IiHAAIAADMQAAAOAGAEQAHAFAWABICPgBQAIgCAFgCQAGgEAEgHQAKgTAhh6IAKAAIAECUQAUAJAJAKQAHAIAAAOQAAAjgoAOQgrAPhtAAgACKh6ICHAAIAAjMIiHAAgAmrhXIgIgbICvAAIAAiUIiHAAIgIgcICPAAIAAikICHAMQgCAVgcACIAACBIAHAAIA0hEIAhAcQAlAgAWAUQgDAPgVABIh/AAIAACUIAgAAIA2hIIAjAeIA8A2QgDAPgWAAg'
      );
    this.shape_21.setTransform(45.1, 45.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .to({ state: [{ t: this.shape_20 }] }, 1)
        .to({ state: [{ t: this.shape_21 }] }, 1)
        .wait(479)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(4.7, 13.8, 22.4, 5.3);

  (lib.t5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('Ah3APIgJgdIDXAAQA2AdgQAAg');
    this.shape.setTransform(12.9, 12.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#0948A6').s().p('AkNAPIgJgdIIDAAQA2AdgQAAg');
    this.shape_1.setTransform(27.9, 12.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#0948A6').s().p('AlYAPIgJgdIKZAAQA2AdgQAAg');
    this.shape_2.setTransform(35.4, 12.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#0948A6').s().p('AmlArIgIgeIKZAAIBOg4IAnASQAtAYAgAdQgEAPgZAAg');
    this.shape_3.setTransform(43, 9.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#0948A6').s().p('AmwBGIgIgfIKZAAIBNhsIAzAsQA4AxAhAfQgFAPgZAAg');
    this.shape_4.setTransform(44.2, 7);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .wait(496)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 10.9, 25.7, 3);

  (lib.t4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('AgEA3QgRgGgJgMQgJgNAKgKQAWgVADgHQAGgOgCgdIAMAAQAKAcAHAcIAFAaQADAXgNAIQgGACgGAAQgIAAgIgDg');
    this.shape.setTransform(11.6, 15.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#0948A6').s().p('AgeBvQghgKgJgfQgIgcAPgYQANgUAbgLQAZgOAUgaQAXgegCgeIALAAQALAcAHAcIAFAbQAFAwgOAkQgNAigbAQQgRAKgRAAQgLAAgLgDg');
    this.shape_1.setTransform(7.6, 21);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#0948A6').s().p('AjABvQgggKgKgfQgHgcAOgYQANgUAbgLQAbgOAUgaQAWgegCgeIAMAAQAKAcAHAcIFGAAIACAbIlDAAQAGAwgPAkQgNAigbAQQgQAKgTAAQgKAAgMgDg');
    this.shape_2.setTransform(23.7, 21);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#0948A6').s().p('AmMBxQgggKgKgfQgHgcAOgYQANgUAbgLQAbgOAUgaQAWgegCgeIAMAAQAKAcAHAcIJAAAIA6g8IBmBiQgFAGgIACQgHACgQACQgXAUgjAZQgkAageAPIgJgFQAKgtAHg7IpDAAQAGAwgPAkQgNAigbAQQgQAKgTAAQgKAAgMgDg');
    this.shape_3.setTransform(44.1, 20.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#0948A6').s().p('AmMCfQgggKgKgfQgHgcAOgYQANgVAbgLQAbgOAUgZQAWgegCgeIAMAAQAKAcAHAcIEjAAQgLgFgNgJQAAglgSglQgRgjgbgYIAHgFQCJABAdBBQAMAZgLAaQgLAYgYALIDoAAIA6g8IBmBhQgFAGgIACQgHACgQACQgXAVgjAZQgkAageAPIgJgFQAKgtAHg8IpDAAQAGAxgPAkQgNAigbAQQgQAKgTAAQgKAAgMgDg');
    this.shape_4.setTransform(44.1, 16.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f('#0948A6')
      .s()
      .p('AmMCfQgggKgKgfQgHgcAOgYQANgVAbgLQAbgOAUgZQAWgegCgeIAMAAQAKAcAHAcIEjAAQgLgFgNgJQAAglgSglQgRgjgbgYIAHgFQCJABAdBBQAMAZgLAaQgLAYgYALIDoAAIA6g8IBmBhQgFAGgIACQgHACgQACQgXAVgjAZQgkAageAPIgJgFQAKgtAHg8IpDAAQAGAxgPAkQgNAigbAQQgQAKgTAAQgKAAgMgDgAisCMIAGgaICsAAIAIAag');
    this.shape_5.setTransform(44.1, 16.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f('#0948A6')
      .s()
      .p('AmMCfQgggKgKgfQgHgcAOgYQANgVAbgLQAbgOAUgZQAWgegCgeIAMAAQAKAcAHAcIEjAAQgLgFgNgJQAAglgSglQgRgjgbgYIAHgFQCJABAdBBQAMAZgLAaQgLAYgYALIDoAAIA6g8IBmBhQgFAGgIACQgHACgQACQgXAVgjAZQgkAageAPIgJgFQAKgtAHg8IpDAAQAGAxgPAkQgNAigbAQQgQAKgTAAQgKAAgMgDgACLCMIk3AAIAGgaIEpAAIAyg2IBoBPQgDADguAAQgkAAg9gCg');
    this.shape_6.setTransform(44.1, 16.2);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f('#0948A6')
      .s()
      .p(
        'ACLEDIAAjYIk3AAIAGgaIEpAAIAyg1IBoBOQgKAMgYAFIAACwQgBAFggAJQgjAKgZAAgAmMA+QgggKgKgfQgHgbAOgYQANgVAbgLQAbgOAUgaQAWgegCgeIAMAAQAKAcAHAcIEjAAQgLgFgNgJQAAglgSglQgRgjgbgYIAHgFQCJABAdBBQAMAZgLAaQgLAYgYALIDoAAIA6g8IBmBiQgFAGgIACQgHACgQACQgXAVgjAZQgkAZgeAPIgJgFQAKgsAHg8IpDAAQAGAxgPAjQgNAigbAQQgQAKgTAAQgKAAgMgDg'
      );
    this.shape_7.setTransform(44.1, 25.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f('#0948A6')
      .s()
      .p(
        'ACLEDIAAgtIk3AAIAAgaIE3AAIAAiRIk3AAIAGgaIEpAAIAyg1IBoBOQgKAMgYAFIAACwQgBAFggAJQgjAKgZAAgAmMA+QgggKgKgfQgHgbAOgYQANgVAbgLQAbgOAUgaQAWgegCgeIAMAAQAKAcAHAcIEjAAQgLgFgNgJQAAglgSglQgRgjgbgYIAHgFQCJABAdBBQAMAZgLAaQgLAYgYALIDoAAIA6g8IBmBiQgFAGgIACQgHACgQACQgXAVgjAZQgkAZgeAPIgJgFQAKgsAHg8IpDAAQAGAxgPAjQgNAigbAQQgQAKgTAAQgKAAgMgDg'
      );
    this.shape_8.setTransform(44.1, 25.9);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f('#0948A6')
      .s()
      .p(
        'ACLEDIAAgtIkeAAQgMAKgRAKQgjAUgeAAIgSAAIAAkcIB2AvIEQAAIAyg1IBoBOQgKAMgYAFIAACwQgBAFggAJQgjAKgZAAgAiTC8IEeAAIAAiRIkeAAgAmMA+QgggKgKgfQgHgbAOgYQANgVAbgLQAbgOAUgaQAWgegCgeIAMAAQAKAcAHAcIEjAAQgLgFgNgJQAAglgSglQgRgjgbgYIAHgFQCJABAdBBQAMAZgLAaQgLAYgYALIDoAAIA6g8IBmBiQgFAGgIACQgHACgQACQgXAVgjAZQgkAZgeAPIgJgFQAKgsAHg8IpDAAQAGAxgPAjQgNAigbAQQgQAKgTAAQgKAAgMgDg'
      );
    this.shape_9.setTransform(44.1, 25.9);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkDG7IAAqRIB2AxIEQAAIAyg2IBoBOQgKANgYAFIAACuQgBAFggAKQgjAKgZAAIgTAAIAAgtIkeAAIAAF0QAAALgdAOQgfAPgiAAgAiTAEIEeAAIAAiPIkeAAgAmMh5QgggKgKgfQgHgcAOgXQANgVAbgMQAbgOAUgZQAWgfgCgeIAMAAQAKAcAHAcIEjAAQgLgEgNgJQAAglgSglQgRgkgbgXIAHgGQCJACAdBBQAMAZgLAZQgLAZgYAKIDoAAIA6g7IBmBiQgFAFgIADQgHACgQABQgXAWgjAYQgkAageAQIgJgGQAKgtAHg8IpDAAQAGAxgPAlQgNAhgbAQQgQALgTAAQgKAAgMgEg'
      );
    this.shape_10.setTransform(44.1, 44.3);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkDG7IAAqRIB2AxIEQAAIAyg2IBoBOQgKANgYAFIAACuQgBAFggAKQgjAKgZAAIgTAAIAAgtIkeAAIAAB2IFSAAIAzg3IBqBPQgHAIiMgGIlcAAIAADkQAAALgdAOQgfAPgiAAgAiTAEIEeAAIAAiPIkeAAgAmMh5QgggKgKgfQgHgcAOgXQANgVAbgMQAbgOAUgZQAWgfgCgeIAMAAQAKAcAHAcIEjAAQgLgEgNgJQAAglgSglQgRgkgbgXIAHgGQCJACAdBBQAMAZgLAZQgLAZgYAKIDoAAIA6g7IBmBiQgFAFgIADQgHACgQABQgXAWgjAYQgkAageAQIgJgGQAKgtAHg8IpDAAQAGAxgPAlQgNAhgbAQQgQALgTAAQgKAAgMgEg'
      );
    this.shape_11.setTransform(44.1, 44.3);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkDG7IAAqRIB2AxIEQAAIAyg2IBoBOQgKANgYAFIAACuQgBAFggAKQgjAKgZAAIgTAAIAAgtIkeAAIAAB2IFSAAIAzg3IBqBPQgMAOgYAFIAADWQgBAHggAMQgiAMgaAAIgSAAIAAkGIlcAAIAADkQAAALgdAOQgfAPgiAAgAiTAEIEeAAIAAiPIkeAAgAmMh5QgggKgKgfQgHgcAOgXQANgVAbgMQAbgOAUgZQAWgfgCgeIAMAAQAKAcAHAcIEjAAQgLgEgNgJQAAglgSglQgRgkgbgXIAHgGQCJACAdBBQAMAZgLAZQgLAZgYAKIDoAAIA6g7IBmBiQgFAFgIADQgHACgQABQgXAWgjAYQgkAageAQIgJgGQAKgtAHg8IpDAAQAGAxgPAlQgNAhgbAQQgQALgTAAQgKAAgMgEg'
      );
    this.shape_12.setTransform(44.1, 44.3);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkDG7IAAqRIB2AxIEQAAIAyg2IBoBOQgKANgYAFIAACuQgBAFggAKQgjAKgZAAIgTAAIAAgtIkeAAIAAB2IFSAAIAzg3IBqBPQgMAOgYAFIAADWQgBAHggAMQgiAMgaAAIgSAAIAAkGIlcAAIAAClICkAAIAAAbIikAAIAAAkQAAALgdAOQgfAPgiAAgAiTAEIEeAAIAAiPIkeAAgAmMh5QgggKgKgfQgHgcAOgXQANgVAbgMQAbgOAUgZQAWgfgCgeIAMAAQAKAcAHAcIEjAAQgLgEgNgJQAAglgSglQgRgkgbgXIAHgGQCJACAdBBQAMAZgLAZQgLAZgYAKIDoAAIA6g7IBmBiQgFAFgIADQgHACgQABQgXAWgjAYQgkAageAQIgJgGQAKgtAHg8IpDAAQAGAxgPAlQgNAhgbAQQgQALgTAAQgKAAgMgEg'
      );
    this.shape_13.setTransform(44.1, 44.3);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkDG7IAAqRIB2AxIEQAAIAyg2IBoBOQgKANgYAFIAACuQgBAFggAKQgjAKgZAAIgTAAIAAgtIkeAAIAAB2IFSAAIAzg3IBqBPQgMAOgYAFIAADWQgBAHggAMQgiAMgaAAIgSAAIAAkGIlcAAIAAClIENAAIAAAbIkNAAIAAAkQAAALgdAOQgfAPgiAAgAiTAEIEeAAIAAiPIkeAAgAmMh5QgggKgKgfQgHgcAOgXQANgVAbgMQAbgOAUgZQAWgfgCgeIAMAAQAKAcAHAcIEjAAQgLgEgNgJQAAglgSglQgRgkgbgXIAHgGQCJACAdBBQAMAZgLAZQgLAZgYAKIDoAAIA6g7IBmBiQgFAFgIADQgHACgQABQgXAWgjAYQgkAageAQIgJgGQAKgtAHg8IpDAAQAGAxgPAlQgNAhgbAQQgQALgTAAQgKAAgMgEg'
      );
    this.shape_14.setTransform(44.1, 44.3);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f('#0948A6')
      .s()
      .p(
        'AkDG7IAAqRIB2AxIEQAAIAyg2IBoBOQgKANgYAFIAACuQgBAFggAKQgjAKgZAAIgTAAIAAgtIkeAAIAAB2IFSAAIAzg3IBqBPQgMAOgYAFIAADWQgBAHggAMQgiAMgaAAIgSAAIAAhGIlcAAIAAAkQAAALgdAOQgfAPgiAAgAiTFUIFcAAIAAilIlcAAgAiTAEIEeAAIAAiPIkeAAgAmMh5QgggKgKgfQgHgcAOgXQANgVAbgMQAbgOAUgZQAWgfgCgeIAMAAQAKAcAHAcIEjAAQgLgEgNgJQAAglgSglQgRgkgbgXIAHgGQCJACAdBBQAMAZgLAZQgLAZgYAKIDoAAIA6g7IBmBiQgFAFgIADQgHACgQABQgXAWgjAYQgkAageAQIgJgGQAKgtAHg8IpDAAQAGAxgPAlQgNAhgbAQQgQALgSAAQgLAAgMgEg'
      );
    this.shape_15.setTransform(44.1, 44.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .wait(485)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(8.1, 9.6, 7, 11.7);

  (lib.t3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('AgFAbQgIgegKgIQgfgYgDgDIAIgGQArADAdAVQAaASAHAVQAHAVgQAFIgHAAQgSAAgbgSg');
    this.shape.setTransform(13.6, 5.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#0948A6').s().p('AgDBDQgKgjgbgpQgWgigdgfIAHgHQBaAIAvAjQAnAcAAAkQAAAigdAPQgNAHgNAAQgUAAgUgPg');
    this.shape_1.setTransform(17, 9.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#0948A6').s().p('AhJCLQgHgegOgNQgUgOgQgQIAHgGQAvgBAgAVQAbASAHAYQAGAXgQAHQgFACgGAAQgRAAgZgPgAAjgEQgKgkgagpQgWgjgdgfIAHgGQBaAIAvAiQAnAdAAAlQAAAigdAOQgNAGgNAAQgUAAgVgNg');
    this.shape_2.setTransform(13.1, 16.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#0948A6').s().p('AgvCqQgIghgagnQgWgigbgbIAHgGQBXAFAsAgQAmAaAAAjQgBAhgcAPQgMAGgMAAQgTAAgVgNgAAjghQgKgjgagqQgWgigdgfIAHgHQBaAIAvAjQAnAcAAAlQAAAigdAPQgNAGgNAAQgUAAgVgOg');
    this.shape_3.setTransform(13.1, 19.3);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#0948A6').s().p('AAAFDQgfgHgegUQgRgMghgDIAAgSIAtAAQAVAAAmAJQAxAMAAAQQABAZgaAAQgIAAgJgCgAgvAcQgIghgagnQgWgigbgaIAHgGQBXAFAsAfQAmAaAAAkQgBAfgcAPQgMAGgMAAQgTAAgVgMgAAjivQgKgkgagpQgWgjgdgfIAHgGQBaAIAvAiQAnAdAAAlQAAAigdAPQgNAGgNAAQgUAAgVgOg');
    this.shape_4.setTransform(13.1, 33.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#0948A6').s().p('AgSGCQgSgOABgaQABg6gEgZQgGgagRgMQgRgMghgDIAAgTIAtAAQAYAAAwAfQBAApACA2QACBQg6AAQgUgBgOgKgAgvgqQgIgigagnQgWgigbgbIAHgGQBXAGAsAfQAmAaAAAjQgBAhgcAPQgMAGgMAAQgTAAgVgMgAAjj3QgKgjgagpQgWgjgdgfIAHgGQBaAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg');
    this.shape_5.setTransform(13.1, 40.7);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#0948A6').s().p('AgeGqQgQgNgEgaQANhKgDg6QgDg7gSgLQgRgMghgDIAAgTIAtAAQAhAAAsAnQBDA7AABtQAAAjgWAWQgWAWghAAQgSAAgNgLgAgvhTQgIghgagnQgWgigbgbIAHgGQBXAFAsAgQAmAaAAAjQgBAhgcAPQgMAGgMAAQgTAAgVgNgAAjkfQgKgjgagqQgWgigdgfIAHgHQBaAIAvAjQAnAcAAAlQAAAigdAPQgNAGgNAAQgUAAgVgOg');
    this.shape_6.setTransform(13.1, 44.7);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f('#0948A6')
      .s()
      .p('AgeGqQgQgNgEgaQANhKgDg6QgDg7gSgLQgRgMghgDIAAgTIAtAAQANAACVjaQgbBSgQBTQgMBBABAaQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgSAAgNgLgAgvhTQgIghgagnQgWgigbgbIAHgGQBXAFAsAgQAmAaAAAjQgBAhgcAPQgMAGgMAAQgTAAgVgNgAAjkfQgKgjgagqQgWgigdgfIAHgHQBaAIAvAjQAnAcAAAlQAAAigdAPQgNAGgNAAQgUAAgVgOg');
    this.shape_7.setTransform(13.1, 44.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f('#0948A6')
      .s()
      .p(
        'Ag4GqQgQgNgEgaQANhKgDg6QgDg7gSgLQgRgMgggDIAAgTIAsAAQALAAAEgCQAGgEAHgOQAQgcAZg5QAag3CKk2IAQAEQgjBtgmB7QgrCMgKAlQgQA7ACAkQAAATATA1QASAygCAvQAAAjgXAWQgVAWggAAQgTAAgNgLgAhIhTQgJghgagnQgWgigbgbIAHgGQBXAFAtAgQAlAaAAAjQAAAhgcAPQgMAGgNAAQgTAAgUgNgAAJkfQgJgjgagqQgXgigdgfIAIgHQBaAIAuAjQAoAcAAAlQgBAigdAPQgMAGgNAAQgUAAgWgOg'
      );
    this.shape_8.setTransform(15.7, 44.7);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f('#0948A6')
      .s()
      .p(
        'AjfGqQgQgNgEgaQANhKgDg6QgDg7gSgLQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgEAHgOQAQgcAZg5QAag3CLk2IAQAEQgjBtgmB7QgsCMgJAlQgQA7ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAjwhTQgIghgagnQgWgigbgbIAHgGQBXAFAtAgQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgNgAgCjeIgHgcIC/AAQCbAcgOAAgAidkfQgKgjgbgqQgWgigdgfIAHgHQBbAIAvAjQAnAcAAAlQAAAigdAPQgMAGgOAAQgTAAgWgOg'
      );
    this.shape_9.setTransform(32.4, 44.7);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f('#0948A6')
      .s()
      .p(
        'AlGGqQgQgNgEgaQANhKgDg6QgDg7gSgLQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgEAHgOQAQgcAZg5QAag3CLk2IAQAEQgjBtgmB7QgsCMgJAlQgQA7ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAlXhTQgIghgagnQgWgigbgbIAHgGQBXAFAtAgQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgNgAhpjeIgHgcIFzAAIA8hOIAmAfQAsAkAaAXQgEAQgXAAgAkEkfQgKgjgbgqQgWgigdgfIAHgHQBbAIAvAjQAnAcAAAlQAAAigdAPQgNAGgNAAQgUAAgVgOg'
      );
    this.shape_10.setTransform(42.7, 44.7);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f('#0948A6')
      .s()
      .p(
        'AlGGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAlXhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgABIi7IAAgeIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAAAegAkEkaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_11.setTransform(42.7, 44.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f('#0948A6')
      .s()
      .p(
        'AlGGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgABIgEIAAjVIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADVgAlXhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkEkaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_12.setTransform(42.7, 44.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f('#0948A6')
      .s()
      .p(
        'AlGGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAixgPIClAAIAAAOIieALgABIgEIAAjVIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADVgAlXhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkEkaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_13.setTransform(42.7, 44.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#0948A6')
      .s()
      .p(
        'AlGGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAiqAKIgHgZID5AAIAAjKIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADKIAZAAIAbgJQAhgEAaAYQgEAOgWAAgAlXhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkEkaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_14.setTransform(42.7, 44.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f('#0948A6')
      .s()
      .p(
        'AleGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAjCAKIgHgZID5AAIAAjKIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADKIBzAAIA+hTIApAgQAvAmAaAYQgEAOgWAAgAlvhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkckaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_15.setTransform(45.1, 44.2);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f('#0948A6')
      .s()
      .p(
        'AleGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAgQCdQAfg9AJghQAGgTADgiIjjAAIgHgZID5AAIAAjKIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADKIBzAAIA+hTIApAgQAvAmAaAYQgEAOgWAAIlnAAIB+A5QgCAFgLACQgOADgIAFQgaAQhMAiQg8AbgJAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBgAlvhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkckaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_16.setTransform(45.1, 44.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f('#0948A6')
      .s()
      .p(
        'AleGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAh8EjQgfgFAGgFQAtggA6hZQA1hSAahEIjjAAIgHgZID5AAIAAjKIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADKIBzAAIA+hTIApAgQAvAmAaAYQgEAOgWAAIlnAAIB+A5QgDAIgJADQgKAFgNgBQgrAzhFA8QhGA8hDArIgggFgAlvhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkckaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_17.setTransform(45.1, 44.2);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f('#0948A6')
      .s()
      .p(
        'AleGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAi3EmIANgDQAPgFAGgFQAtggA6hZQA1hSAahEIjjAAIgHgZID5AAIAAjKIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADKIBzAAIA+hTIApAgQAvAmAaAYQgEAOgWAAIlnAAIB+A5QgDAIgJADQgKAFgNgBQgrAzhFA8QhGA8hDArQAbABAzAEQAyAFABADIAJASQg4ARgjAVQgVAMgoAaQgFAEgIAIQgGAHgFACgAlvhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkckaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_18.setTransform(45.1, 44.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f('#0948A6')
      .s()
      .p(
        'AleGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAi3EmIANgDQAPgFAGgFQAtggA6hZQA1hSAahEIjjAAIgHgZID5AAIAAjKIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADKIBzAAIA+hTIApAgQAvAmAaAYQgEAOgWAAIlnAAIB+A5QgDAIgJADQgKAFgNgBQgrAzhFA8QhGA8hDArQCbgHDPgOQgNgeAPAeIgCAAIAEAHIAIATQiZAwjrA2QgMARgMAEgAlvhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkckaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_19.setTransform(45.1, 44.2);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f('#0948A6')
      .s()
      .p(
        'AleGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgDAHgOQAQgdAZg5QAag2CLk2IAQADQgjBtgmB8QgsCLgJAmQgQA6ABAkQABATATA1QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAi3EmIANgDQAPgFAGgFQAtggA6hZQA1hSAahEIjjAAIgHgZID5AAIAAjKIixAAIgHgcIC4AAIAAjEICTANQgDAKgHAGQgIAHgRADIAACdIBLAAIA8hOIAmAfQAsAlAaAXQgEAPgXAAIjYAAIAADKIBzAAIA+hTIApAgQAvAmAaAYQgEAOgWAAIlnAAIB+A5QgDAIgJADQgKAFgNgBQgrAzhFA8QhGA8hDArQCcgHDQgOQgkhJg0hIIAKgGQCDAqgDBWQgBAcgQATQgQAQgHgOQiZAwjrA2QgMARgMAEgAlvhNQgIgigagnQgWgigbgbIAHgGQBXAGAtAfQAmAaAAAjQgBAhgcAPQgMAGgNAAQgTAAgVgMgAkckaQgKgjgbgpQgWgjgdgfIAHgGQBbAHAvAjQAnAcAAAmQAAAhgdAPQgNAHgNAAQgUAAgVgPg'
      );
    this.shape_20.setTransform(45.1, 44.2);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f('#0948A6')
      .s()
      .p(
        'AleGvQgQgNgEgaQANhKgDg6QgDg6gSgMQgRgMghgDIAAgTIAtAAQALAAAEgCQAGgEAHgOQAQgcAZg4QAag3CLk3IAQAFQgjBsgmB7QgsCMgJAlQgQA7ABAkQABAUATA0QASAygCAvQgBAjgWAWQgVAWghAAQgTAAgNgLgAE/GbQgIgugdhBQiZAxjrA3QgMAPgMAFIg1iCIANgEQAPgFAGgEQAtghA6hXQA1hSAahFIjjAAIgHgaID5AAIAAjJIixAAIgHgbIC4AAIAAjFICTAMQgDALgHAGQgIAHgRADIAACeIBLAAIA8hPIAmAgQAsAjAaAXQgEAQgXAAIjYAAIAADJIBzAAIA+hSIApAhQAvAlAaAYQgEAOgWAAIlnAAIB+A6QgDAGgJAFQgKAEgNgCQgrA0hFA7QhGA9hDArQCcgHDQgOQgkhJg0hIIAKgGQBzAuA+BDQA0A5ADA5QAEA1ghATQgOAJgOAAQgXAAgbgVgAlvhOQgIghgagnQgWgigbgaIAHgGQBXAEAtAgQAmAaAAAkQgBAggcAPQgMAGgNAAQgTAAgVgNgAkckZQgKgkgbgqQgWgigdgfIAHgHQBbAJAvAiQAnAcAAAlQAAAigdAQQgNAGgNAAQgUAAgVgOg'
      );
    this.shape_21.setTransform(45.1, 44.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .to({ state: [{ t: this.shape_20 }] }, 1)
        .to({ state: [{ t: this.shape_21 }] }, 1)
        .wait(479)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(7.8, 1.1, 11.6, 9.1);

  (lib.t2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('AgmANIgEgZIBVAAIgUAZg');
    this.shape.setTransform(14.8, 7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#0948A6').s().p('AiPANIgEgZIEnAAIgVAZg');
    this.shape_1.setTransform(25.3, 7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#0948A6').s().p('ACoAoIngAAIgFgbIHbAAIA0g3IBsBRQgDAEgrAAQglAAhDgDg');
    this.shape_2.setTransform(42.2, 4.3);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#0948A6').s().p('ACoBPIAAhLIngAAIgFgZIHbAAIA0g5IBsBRQgLAPgbAFIAAAbQgBAGggALQgiAMgbAAg');
    this.shape_3.setTransform(42.2, 7.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#0948A6').s().p('ACoCpIAAj+IngAAIgFgaIHbAAIA0g5IBsBSQgLAPgbAFIAADOQgBAGggALQgiAMgbAAg');
    this.shape_4.setTransform(42.2, 16.9);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#0948A6').s().p('ACoCpIAAj+IngAAIgFgaIHbAAIA0g5IBsBSQgLAPgbAFIAADOQgBAGggALQgiAMgbAAgAksB3IAAgbIC1AAIgdAbg');
    this.shape_5.setTransform(42.2, 16.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#0948A6').s().p('ACoCpIAAgyInUAAIAAgbIHUAAIAAixIngAAIgFgaIHbAAIA0g5IBsBSQgLAPgbAFIAADOQgBAGggALQgiAMgbAAg');
    this.shape_6.setTransform(42.2, 16.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#0948A6').s().p('AldD1IAAnhIB9AvIGfAAIAzg5IBsBSQgLAPgbAFIAADOQgBAGggALQgiAMgaAAIgTAAIAAgyIm2AAIAAC3Ig6AOQglAJgLAAQgFAAAAgCgAjuAOIG2AAIAAixIm2AAg');
    this.shape_7.setTransform(39, 24.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#0948A6').s().p('AjuFgIAMAAQALAAgXAHgAldFXIAAqzIB9AvIGfAAIAzg5IBsBSQgLAPgbAFIAADPQgBAFggAMQgiAMgaAAIgTAAIAAgzIm2AAIAAGnIgeACIgbAAQg2AAAAgLgAjuhiIG2AAIAAixIm2AAg');
    this.shape_8.setTransform(39, 35.9);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#0948A6').s().p('AlxFBQAZgPAIgLQAHgKAAgTIAAq0IB9AvIGfAAIAzg4IBsBSQgLAOgbAGIAADOQgBAGggALQgiAMgaAAIgTAAIAAgyIm2AAIAAGuQAZgHANAIQANAJgGATQgNAvhbAzQgMAUgQAHgAjaivIG2AAIAAixIm2AAg');
    this.shape_9.setTransform(37, 43.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#0948A6').s().p('AlxFBQAZgPAIgLQAHgKAAgTIAAq0IB9AvIGfAAIAzg4IBsBSQgLAOgbAGIAADOQgBAGggALQgiAMgaAAIgTAAIAAgyIm2AAIAAGuQB4giBvgiIADAKQiUBoiRBRQgMAUgQAHgAjaivIG2AAIAAixIm2AAg');
    this.shape_10.setTransform(37, 43.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#0948A6').s().p('AlxFBQAZgPAIgLQAHgKAAgTIAAq0IB9AvIGfAAIAzg4IBsBSQgLAOgbAGIAADOQgBAGggALQgiAMgaAAIgTAAIAAgyIm2AAIAACmIDPAAQClAbgOAAIlmAAIAADtQB4giBvgiIADAKQiUBoiRBRQgMAUgQAHgAjaivIG2AAIAAixIm2AAg');
    this.shape_11.setTransform(37, 43.6);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#0948A6').s().p('AmSFBQAZgPAIgLQAHgKAAgTIAAq0IB8AvIGfAAIAzg4IBsBSQgKAOgbAGIAADOQgBAGggALQgjAMgaAAIgSAAIAAgyIm2AAIAACmIHbAAIBAhPIApAgQAvAjAbAYQgDAPgYAAIpzAAIAADtQB4giBvgiIAEAKQiVBoiSBRQgLAUgRAHgAj7ivIG2AAIAAixIm2AAg');
    this.shape_12.setTransform(40.3, 43.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#0948A6').s().p('AmSFBQAZgPAIgLQAHgKAAgTIAAq0IB8AvIGfAAIAzg4IBsBSQgKAOgbAGIAADOQgBAGggALQgjAMgaAAIgSAAIAAgyIiMAAQAABZASBNICfAAIBAhPIApAgQAvAjAbAYQgDAPgYAAIpzAAIAADtQB4giBvgiIAEAKQiVBoiSBRQgLAUgRAHgAj7ASIDOAAQgPhKgDhcIi8AAgAj7ivIG2AAIAAixIm2AAg');
    this.shape_13.setTransform(40.3, 43.6);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#0948A6')
      .s()
      .p('AmSFBQAZgPAIgLQAHgKAAgTIAAq0IB8AvIGfAAIAzg4IBsBSQgKAOgbAGIAADOQgBAGggALQgjAMgaAAIgSAAIAAgyIiMAAQAABZASBNICfAAIBAhPIApAgQAvAjAbAYQgDAPgYAAIkwAAQAMAqAfBiQAfBig8giQg8gjgag4Qgcg5gNg4IjSAAIAADtQB4giBvgiIAEAKQiVBoiSBRQgLAUgRAHgAj7ASIDOAAQgPhKgDhcIi8AAgAj7ivIG2AAIAAixIm2AAg');
    this.shape_14.setTransform(40.3, 43.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f('#0948A6')
      .s()
      .p('AmSFBQAZgPAIgLQAHgKAAgTIAAq0IB8AvIGfAAIAzg4IBsBSQgKAOgbAGIAADOQgBAGggALQgjAMgaAAIgSAAIAAgyIiMAAQAABZASBNICfAAIBAhPIApAgQAvAjAbAYQgDAPgYAAIkwAAQA3DDCnBAQAHADACAUQACAVgFAVQgMA6gngPQh7g1hJhiQhBhYgdiAIjSAAIAADtQB4giBvgiIAEAKQiVBoiSBRQgLAUgRAHgAj7ASIDOAAQgPhKgDhcIi8AAgAj7ivIG2AAIAAixIm2AAg');
    this.shape_15.setTransform(40.3, 43.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmXFBQAZgPAIgLQAHgKAAgTIAAq0IB9AvIGfAAIAzg4IBsBSQgLAOgbAGIAADOQgBAGggALQgiAMgaAAIgTAAIAAgyIiMAAQAABZASBNICgAAIBAhPIApAgQAuAjAcAYQgEAPgXAAIkwAAQA3DDCnBAQANAGAJgCQAIgCAHgKQAagnAXg8IALACIgOB9QAaAZAGASQAGASgKATQgiA3h7gvQh6g1hKhiQhAhYgdiAIjTAAIAADtQB4giBwgiIADAKQiVBoiRBRQgMAUgQAHgAkAASIDOAAQgPhKgDhcIi8AAgAkAivIG2AAIAAixIm2AAg'
      );
    this.shape_16.setTransform(40.8, 43.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .wait(484)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(10.5, 5.7, 8.6, 2.7);

  (lib.t1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 2
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('Ag2DIIAAmPIBtAuIgIAbIAAEgQAAALgaANQgcAOgeAAg');
    this.shape.setTransform(5.5, 21.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#0948A6').s().p('Ag2GxIAAthIBtAuIgIAbIAALyQAAALgaANQgcAOgeAAg');
    this.shape_1.setTransform(5.5, 44.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#0948A6').s().p('AkNGxIAAthIBvAuIETAAICZAYQgHAJiJgGIklAAIAALyQAAALgaANQgcAOgfAAg');
    this.shape_2.setTransform(27, 44.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#0948A6').s().p('AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIhpgSIpLAAIAALyQAAALgaANQgdAOgeAAg');
    this.shape_3.setTransform(41.7, 43.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#0948A6').s().p('AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAAGIQgCAHgcAMQgfAPgbAAIgRAAIAAm8IpLAAIAALyQAAALgaANQgdAOgeAAg');
    this.shape_4.setTransform(41.7, 43.9);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#0948A6').s().p('AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAg');
    this.shape_5.setTransform(41.7, 43.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#0948A6').s().p('AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAkdi6IgIgbID2AAQBvAbgNAAg');
    this.shape_6.setTransform(41.7, 43.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#0948A6').s().p('AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAkdi6IgIgbIGpAAIAsg7IAfAcQAlAeAMANQgEAPgVAAg');
    this.shape_7.setTransform(41.7, 43.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f('#0948A6')
      .s()
      .p('AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAAsAWIgvgMQgQg+gGg+IgFhIIj/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAfgqIADgDIACgCIAFgIIABAAIACgEIAfAcQAlAeAMANQgEAPgVAAIisAAQAFBuAVBUQAEAQgZAAQgIAAgMgCg');
    this.shape_8.setTransform(41.7, 43.9);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAC1EtQgigLgcgcQgfgiggg2IgQgfIgNghQgQgogRhYIgQhRQgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAfgqIADgDIACgCIAFgIIABAAIACgEIAfAcQAlAeAMANQgEAPgVAAIisAAQAFBuAVBUQAOA2AUApQAYAtAcAcQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgOAPgWAAQgNAAgOgFg'
      );
    this.shape_9.setTransform(41.7, 43.9);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAC1EtQgigLgcgcQgigmgdgyQguAsgLgZQgMgZAog6QgQgogRhYIgQhRQgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAfgqIADgDIACgCIAFgIIABAAIACgEIAfAcQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgOAPgWAAQgNAAgOgFg'
      );
    this.shape_10.setTransform(41.7, 43.9);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgQgogRhYIgQhRQgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAfgqIADgDIACgCIAFgIIABAAIACgEIAfAcQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzg'
      );
    this.shape_11.setTransform(41.7, 43.9);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgQgogRhYIgQhRQgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAVgbIgEgCQgHgXgRgbQgRgXgRgRIAIgHQBVAEAaAkQAXAegaAZQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzg'
      );
    this.shape_12.setTransform(41.7, 43.9);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgihagPh1QgBABAAgBIABgCQgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAVgbIgEgCQgHgXgRgbQgRgXgRgRIAIgHQBVAEAaAkQAXAegaAZQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzgAkDBgIAAj3IBQAhIgEAaIAAClQAAAFgVAIQgXAKgUAAg'
      );
    this.shape_13.setTransform(41.7, 43.9);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgihagPh1QgIAJgSADIhNgHIg6AAIAAClQAAAFgVAIQgXAKgUAAIgMAAIAAj3IBQAhIAvAAIAkglIBKA4QgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAVgbIgEgCQgHgXgRgbQgRgXgRgRIAIgHQBVAEAaAkQAXAegaAZQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzg'
      );
    this.shape_14.setTransform(41.7, 43.9);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgihagPh1QgIAJgSADIAACLQgBAGgVAJQgZAKgSAAIgMAAIAAirIg6AAIAAClQAAAFgVAIQgXAKgUAAIgMAAIAAj3IBQAhIAvAAIAkglIBKA4QgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAVgbIgEgCQgHgXgRgbQgRgXgRgRIAIgHQBVAEAaAkQAXAegaAZQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzg'
      );
    this.shape_15.setTransform(41.7, 43.9);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgihagPh1QgIAJgSADIAACLQgBAGgVAJQgZAKgSAAIgMAAIAAgdIg6AAIAAAXQAAAFgVAIQgXAKgUAAIgMAAIAAj3IBQAhIAvAAIAkglIBKA4QgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAVgbIgEgCQgHgXgRgbQgRgXgRgRIAIgHQBVAEAaAkQAXAegaAZQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzgAi3AXIA6AAIAAhzIg6AAg'
      );
    this.shape_16.setTransform(41.7, 43.9);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgihagPh1QgIAJgSADIAACLQgBAGgVAJQgZAKgSAAIgMAAIAAgdIg6AAIAAAXQAAAFgVAIQgXAKgUAAIgMAAIAAj3IBQAhIAvAAIAkglIBKA4QgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAVgbIgEgCQgHgXgRgbQgRgXgRgRIAIgHQBVAEAaAkQAXAegaAZQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzgAi3AXIA6AAIAAhzIg6AAgAkoCQIBAgBQArAABDgMQhuB2gKADg'
      );
    this.shape_17.setTransform(41.7, 43.9);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAALyQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgihagPh1QgIAJgSADIAACLQgBAGgVAJQgZAKgSAAIgMAAIAAgdIg6AAIAAAXQAAAFgVAIQgXAKgUAAIgMAAIAAj3IBQAhIAvAAIAkglIBKA4QgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAVgbIgEgCQgHgXgRgbQgRgXgRgRIAIgHQBVAEAaAkQAXAegaAZQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzgAi3AXIA6AAIAAhzIg6AAgAkoCQQBVgJC/ghIACALQhRA1h4A/QgHATgQAEg'
      );
    this.shape_18.setTransform(41.7, 43.9);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG2IAAthIBvAuII5AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQgfAOgbAAIgRAAIAAsTIpLAAIAAKzIEDAAIgeAcIjlAAIAAAjQAAALgaANQgdAOgeAAgAinEoQByhHBQhzQgihagPh1QgIAJgSADIAACLQgBAGgVAJQgZAKgSAAIgMAAIAAgdIg6AAIAAAXQAAAFgVAIQgXAKgUAAIgMAAIAAj3IBQAhIAvAAIAkglIBKA4QgDgdgFg6Ij/AAIgIgbIEGAAIgEh+IB9AWQgGAVgcACIABBRIBLAAIAVgbIgEgCQgHgXgRgbQgRgXgRgRIAIgHQBVAEAaAkQAXAegaAZQAlAeAMANQgEAPgVAAIisAAQAFBwAVBSQAmhPAThSIB2AxQgHATgggDQgnBtg/BSQAaAvAaAaQAHAKAFgBQAFgBAFgKQAQgcAXhCIALACIgQCBQATAgAEATQAEASgKALQgWAXgpgNQgigLgcgcQgigmgdgyQhUBTiDAzgAi3AXIA6AAIAAhzIg6AAgAkoCQQBVgJC/ghIACALQhRA1h4A/QgHATgQAEg'
      );
    this.shape_19.setTransform(41.7, 43.9);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f('#0948A6')
      .s()
      .p(
        'AmgG3IAAtiIBuAuII6AAIAzg5IBmBRQgMAOgbAHIAALfQgCAHgcANQggAOgaAAIgQAAIAAhEIpMAAIAAAjQAAALgaANQgcAPgfAAgAk6FRIJMAAIAAqzIpMAAgAinEoQByhGBPh1QghhZgPh1QgHAKgTACIAACLQgBAGgVAJQgYAKgTAAIgNAAIAAgdIg5AAIAAAXQAAAFgUAIQgXAKgVAAIgLAAIAAj3IBOAhIAwAAIAkgkIBKA3QgEgdgEg6Ij/AAIgHgbIEFAAIgEh+IB8AWQgFAWgbABIABBRIBKAAIAUgcIgDgBQgGgXgTgbQgQgXgRgRIAIgHQBUAEAcAkQAWAegbAZQAmAeAMANQgEAPgVAAIisAAQAEBxAWBRQAmhPAShSIB3AxQgIATgfgDQgoBtg9BSQAZAwAZAZQAJAKAEgBQAFgBAGgLQAPgbAXhCIAKACIgPCBQATAgAEATQAEASgKAKQgXAYgogNQgigMgbgbQgjgmgcgzQhWBUiBAzgAi3AXIA5AAIAAhyIg5AAgAkoCQQBUgJDAghIACALQhRA1h4A/QgHASgRAFg'
      );
    this.shape_20.setTransform(41.7, 43.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .to({ state: [{ t: this.shape_20 }] }, 1)
        .wait(480)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 1.1, 11.1, 40.1);

  (lib.sun = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFBF24').s().p('AzmTmQoHoHAArfQAAreIHoIQDBjBDfh5QF5jNHNAAQLfAAIHIHQIIIIAALeQAAH4j0GTQhwC4ikCjQoHIIrfAAQreAAoIoIg');

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-177.4, -177.4, 354.9, 354.9);

  (lib.f02 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('AhMBzIAAgaIB/AAIAAjLIAaAAIAADlg');
    this.shape.setTransform(7.7, 11.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 15.4, 23.1);

  (lib.f01 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('AhPB4IAAjvICfAAIAAAaIiFAAIAADVg');
    this.shape.setTransform(8, 12);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 15.9, 24.1);

  (lib.ddsdd = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s('#0948A6')
      .p(
        'AB+BkIh1h0IARgSIAHAHIAUgUQACgEAAgDIAAgEIgCgCIhEhEQgCgCgFgBQgDAAgDADIgTAUIAHAHIg+A/IgHgGIgTAUQgGAFAGAHIBFBDQAHAGAGgGIAUgUIgHgHIARgSIB1B0QAFAGAIAAQAIAAAFgGQAFgFAAgIQAAgEgCgEgAgnAjIgNAOIhFhDIANgOgAgjhsIANgNIBEBDIgNAOgAgjheIA0AzIADADIg8A+Ig4g1gAB7BxQAAAEgCADQgDADgEAAQgEAAgDgDIh0h1IAMgMIB1BzQADAEAAADg'
      );
    this.shape.setTransform(-13.2, -13.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f('#0948A6')
      .s()
      .p(
        'ABlB+Ih1h1IgRASIAHAHIgUAUQgGAHgHgHIhFhCQgGgHAGgFIATgVIAHAHIA+hAIgHgGIATgUQADgDADABQAFABACABIBEBEIACADIAAADQAAAEgCADIgUATIgHgGIgRASIB1BzIAEAFQACAEAAAFQAAAIgFAFQgFAFgIABQgIgBgFgFgAgJAEIB0B0QADACAEAAQAEAAADgCQACgDAAgEQAAgDgDgEIh1h0gAh5gSIBFBDIANgOIhFhDgAhggfIA4A1IA8g+IgDgCIg0g0gAgjhsIBEBEIANgOIhEhDg'
      );
    this.shape_1.setTransform(-13.2, -13.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-27.4, -29.9, 30.6, 33.3);

  (lib.t8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 圖層 2
    this.instance = new lib.ddsdd('synched', 0);
    this.instance.parent = this;
    this.instance.setTransform(26.4, 31, 1, 1, 45);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(2)
        .to({ _off: false }, 0)
        .to({ rotation: -9.2 }, 3)
        .to({ rotation: 7.7 }, 2)
        .to({ rotation: -2.7 }, 2)
        .to({ rotation: 0 }, 2)
        .wait(15)
        .to({ startPosition: 0 }, 0)
        .to({ rotation: 29.5 }, 5, cjs.Ease.get(1))
        .to({ rotation: -25.9 }, 2)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 1.2, y: 31 }, 3)
        .to({ rotation: -25.9, x: 26.4 }, 3)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 9.7, x: 26.4, y: 31 }, 4)
        .to({ rotation: -3.9 }, 3)
        .to({ rotation: 0 }, 3)
        .wait(44)
        .to({ startPosition: 0 }, 0)
        .to({ rotation: 29.5 }, 5, cjs.Ease.get(1))
        .to({ rotation: -25.9 }, 2)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 1.2, y: 31 }, 3)
        .to({ rotation: -25.9, x: 26.4 }, 3)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 9.7, x: 26.4, y: 31 }, 4)
        .to({ rotation: -3.9 }, 3)
        .to({ rotation: 0 }, 3)
        .wait(51)
        .to({ startPosition: 0 }, 0)
        .to({ rotation: 29.5 }, 5, cjs.Ease.get(1))
        .to({ rotation: -25.9 }, 2)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 1.2, y: 31 }, 3)
        .to({ rotation: -25.9, x: 26.4 }, 3)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 9.7, x: 26.4, y: 31 }, 4)
        .to({ rotation: -3.9 }, 3)
        .to({ rotation: 0 }, 3)
        .wait(41)
        .to({ startPosition: 0 }, 0)
        .to({ rotation: 29.5 }, 5, cjs.Ease.get(1))
        .to({ rotation: -25.9 }, 2)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 1.2, y: 31 }, 3)
        .to({ rotation: -25.9, x: 26.4 }, 3)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 9.7, x: 26.4, y: 31 }, 4)
        .to({ rotation: -3.9 }, 3)
        .to({ rotation: 0 }, 3)
        .wait(41)
        .to({ startPosition: 0 }, 0)
        .to({ rotation: 29.5 }, 5, cjs.Ease.get(1))
        .to({ rotation: -25.9 }, 2)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 1.2, y: 31 }, 3)
        .to({ rotation: -25.9, x: 26.4 }, 3)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 9.7, x: 26.4, y: 31 }, 4)
        .to({ rotation: -3.9 }, 3)
        .to({ rotation: 0 }, 3)
        .wait(32)
        .to({ startPosition: 0 }, 0)
        .to({ rotation: 29.5 }, 5, cjs.Ease.get(1))
        .to({ rotation: -25.9 }, 2)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 1.2, y: 31 }, 3)
        .to({ rotation: -25.9, x: 26.4 }, 3)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 9.7, x: 26.4, y: 31 }, 4)
        .to({ rotation: -3.9 }, 3)
        .to({ rotation: 0 }, 3)
        .wait(39)
        .to({ startPosition: 0 }, 0)
        .to({ rotation: 29.5 }, 5, cjs.Ease.get(1))
        .to({ rotation: -25.9 }, 2)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 1.2, y: 31 }, 3)
        .to({ rotation: -25.9, x: 26.4 }, 3)
        .to({ regX: 0.1, regY: 0.1, rotation: -29.9, x: 26.5, y: 31.1 }, 3)
        .to({ regX: 0, regY: 0, rotation: 9.7, x: 26.4, y: 31 }, 4)
        .to({ rotation: -3.9 }, 3)
        .to({ rotation: 0 }, 3)
        .wait(23)
    );

    // 圖層 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#0948A6').s().p('AhJBGQAMgqAEgiQAEghgCgkICBAxQgIAVgfgDIgmAnQgdAbgdATg');
    this.shape.setTransform(52.8, 13.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#0948A6').s().p('AheBzQAahZAhiSICCAyQgJAUgegCQhJBshABBg');
    this.shape_1.setTransform(50.8, 18.3);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#0948A6').s().p('AjvCTIgIgbICmAAIAugXIAaAFQAdAIAWAWQgCAPgXAAgAA6BZQAahZAhiSICDAyQgJAUgegCQhKBshABBg');
    this.shape_2.setTransform(35.5, 20.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#0948A6').s().p('AjvCTIgIgbIFUAAIA2hJIAiAeQAnAhAWAWQgCAPgXAAgAA6BZQAahZAhiSICDAyQgJAUgegCQhKBshABBg');
    this.shape_3.setTransform(35.5, 20.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#0948A6').s().p('AhHDwIi2AAIgIgbIB1AAIAcgMIAWgDQAaACAXAXIAAAIQgHAJgQAAgAjhA2IgIgbIFUAAIA2hIIAiAeQAnAgAWAWQgCAQgXgBgABIgDQAahYAhiUICDAyQgJAVgegDQhKBuhAA/g');
    this.shape_4.setTransform(34.1, 30.2);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#0948A6').s().p('AkGDwIgHgbIGGAAIA2hLIAiAdQAnAhAWAXIAAAIQgHAJgQAAgAjqA2IgHgbIFTAAIA2hIIAiAeQAnAgAWAWQgCAQgXgBgABAgDQAahYAhiUICCAyQgJAVgegDQhKBug/A/g');
    this.shape_5.setTransform(34.9, 30.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#0948A6').s().p('AkGEPIgHgbIGGAAIA2hLIAiAdQAnAhAWAXIAAAIQgHAJgQAAgAjqBVIgHgbIFTAAIA2hIIAiAdQAnAhAWAWQgCAQgXgBgABAAbQAahXAhiUICCAyQgJAVgegDQhKBug/A/gAg+kOICNAOQgCAKgHAHQgIAGgRADIAAA6IhrAbg');
    this.shape_6.setTransform(34.9, 27.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#0948A6').s().p('AkGEPIgHgbIGGAAIA2hLIAiAdQAnAhAWAXIAAAIQgHAJgQAAgAg+BoIAAgTIisAAIgHgbICzAAIAAlIICNAOQgCAKgHAHQgIAGgRADIAAEgIA1AAIA2hIIAiAdQAnAhAWAWQgCAQgXgBIixAAIAAAqgABAAbQAahXAhiUICCAyQgJAVgegDQhKBug/A/g');
    this.shape_7.setTransform(34.9, 27.1);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f('#0948A6')
      .s()
      .p('AgeFHQgUgCgLgdQgMgfAGgyIjDAAIgHgbIDMAAQADgkAAglIAAhVIisAAIgHgcICzAAIAAlIICNAOQgCALgHAGQgIAHgRADIAAEfIA1AAIA2hHIAiAdQAnAiAWAVQgCAPgXAAIixAAIAABVQAAAZgEAwIBQAAIA2hKIAiAcQAnAhAWAXIAAAIQgHAJgQAAIjSAAQgIA4gVAeQgQAagUAAIgCAAgABAgcQAahYAhiUICCAyQgJAVgegDQhKBug/BBg');
    this.shape_8.setTransform(34.9, 32.7);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f('#0948A6')
      .s()
      .p('AkPGwQBfg9AyhUQAvhPANhsIjCAAIgIgbIDNAAQADgkAAglIAAhVIisAAIgIgbIC0AAIAAlJICMAOQgBAKgHAGQgIAHgSADIAAEhIA2AAIA2hJIAiAeQAnAhAWAWQgCAPgXAAIiyAAIAABVQAAAZgEAwIBRAAIA1hKIAjAcQAmAhAXAWIAAAJQgHAJgQAAIjSAAQgTB7hDBRQhLBYiNAygABBiPQAahZAhiTICDAyQgJAUgegCQhKBthABBg');
    this.shape_9.setTransform(34.8, 44.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f('#0948A6')
      .s()
      .p(
        'AlUGwQBfg9AyhUQAvhPANhsIjDAAIgHgbIDNAAQACgkAAglIAAhVIisAAIgHgbICzAAIAAlJICNAOQgCAKgHAGQgGAHgSADIAAEhIA0AAIA2hJIAiAeQAnAhAXAWQgCAPgYAAIiwAAIAABVQAAAZgEAwIBQAAIA1hKIAjAcQAmAhAWAWIAAAJQgGAJgQAAIjSAAQgSB7hEBRQhLBYiNAygADKhIIAAkWICLANQgDAXggAEIAADRQAAAIgbAKQgeALgcAAgAgDiPQAZhZAhiTICCAyQgIAUgfgCQhJBthABBg'
      );
    this.shape_10.setTransform(41.7, 44.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f('#0948A6')
      .s()
      .p(
        'AlUGwQBfg9AyhUQAvhPANhsIjDAAIgHgbIDNAAQACgkAAglIAAhVIisAAIgHgbICzAAIAAlJICNAOQgCAKgHAGQgGAHgSADIAAEhIA0AAIA2hJIAiAeQAnAhAXAWQgCAPgYAAIiwAAIAABVQAAAZgEAwIBQAAIA1hKIAjAcQAmAhAWAWIAAmwICLANQgDAXggAEIAAH8QAAAIgbAKQgeALgcAAIgTAAIAAiIQgGAJgQAAIjSAAQgSB7hEBRQhLBYiNAygAgDiPQAZhZAhiTICCAyQgIAUgfgCQhJBthABBg'
      );
    this.shape_11.setTransform(41.7, 44.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f('#0948A6')
      .s()
      .p(
        'Am1GwQBfg9AyhUQAvhPANhsIjDAAIgHgbIDMAAQADgkAAglIAAhVIisAAIgHgbICzAAIAAlJICOAOQgCAKgHAGQgIAHgRADIAAEhIA1AAIA2hJIAhAeQAnAhAWAWQgCAPgXAAIiwAAIAABVQAAAZgEAwIBQAAIA1hKIAiAcQAnAhAWAWIAAmwICLANQgEAXgfAEIAAH8QAAAIgbAKQgeALgcAAIgTAAIAAiIQgHAJgQAAIjRAAQgSB7hFBRQhKBYiOAygAhkiPQAahZAhiTICBAyQgJAUgegCQhJBtg/BBgAFdkbQgTgHgTgNQgRgMAAgFIAAh4ICQAOQgBAWghAEIAABYQAAAjgbAAQgMAAgQgGg'
      );
    this.shape_12.setTransform(51.4, 44.2);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f('#0948A6')
      .s()
      .p(
        'Am1GwQBfg9AyhUQAvhPANhsIjDAAIgHgbIDMAAQADgkAAglIAAhVIisAAIgHgbICzAAIAAlJICOAOQgCAKgHAGQgIAHgRADIAAEhIA1AAIA2hJIAhAeQAnAhAWAWQgCAPgXAAIiwAAIAABVQAAAZgEAwIBQAAIA1hKIAiAcQAnAhAWAWIAAmwICLANQgEAXgfAEIAAH8QAAAIgbAKQgeALgcAAIgTAAIAAiIQgHAJgQAAIjRAAQgSB7hFBRQhKBYiOAygAFdCNQgTgHgTgNQgRgMAAgFIAAogICQAOQgBAWghAEIAAIAQAAAjgbAAQgMAAgQgGgAhkiPQAahZAhiTICBAyQgJAUgegCQhJBtg/BBg'
      );
    this.shape_13.setTransform(51.4, 44.2);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f('#0948A6')
      .s()
      .p(
        'Am1GwQBfg9AyhUQAvhPANhsIjDAAIgHgbIDMAAQADgkAAglIAAhVIisAAIgHgbICzAAIAAlJICOAOQgCAKgHAGQgIAHgRADIAAEhIA1AAIA2hJIAhAeQAnAhAWAWQgCAPgXAAIiwAAIAABVQAAAZgEAwIBQAAIA1hKIAiAcQAnAhAWAWIAAmwICLANQgEAXgfAEIAAH8QAAAIgbAKQgeALgcAAIgTAAIAAiIQgHAJgQAAIjRAAQgSB7hFBRQhKBYiOAygAFdFVQgTgHgTgNQgRgMAAgFIAAroICQAOQgBAWghAEIAALIQAAAjgbAAQgMAAgQgGgAhkiPQAahZAhiTICBAyQgJAUgegCQhJBtg/BBg'
      );
    this.shape_14.setTransform(51.4, 44.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#0948A6').s().p('AgoGMQgGgUgLgMQgOgOgRgIQgVgKgjgGIAAgNIA2AEIBFADQAVAAAAgSIAAroICQAOQgBAXggAEIAALIQAAA/gZAbQgfAhhZAJQgCgdgEgSg');
    this.shape_15.setTransform(80.8, 44.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f('#0948A6')
      .s()
      .p(
        'AlUGwQBfg9AyhUQAvhPANhsIjDAAIgHgbIDMAAQADgkAAglIAAhVIisAAIgHgbICzAAIAAlJICNAOQgBAKgIAGQgGAHgSADIAAEhIA0AAIA2hJIAiAeQAnAhAXAWQgCAPgYAAIiwAAIAABVQAAAZgEAwIBQAAIA1hKIAjAcQAmAhAWAWIAAmwICLANQgDAXggAEIAAH8QAAAIgbAKQgeALgcAAIgTAAIAAiIQgGAJgQAAIjRAAQgTB7hEBRQhLBYiNAygAgDiPQAZhZAhiTICDAyQgKAUgegCQhJBthABBg'
      );
    this.shape_16.setTransform(41.7, 44.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_16 }, { t: this.shape_15 }] }, 1)
        .wait(485)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(45.4, 6.2, 14.9, 15.3);

  // stage content:
  (lib.title = function (mode, startPosition, loop) {
    if (loop == null) {
      loop = false;
    }
    this.initialize(mode, startPosition, loop, {});

    // t8
    this.instance = new lib.t8('synched', 0, false);
    this.instance.parent = this;
    this.instance.setTransform(503.2, 184.1, 1, 1, 0, 0, 0, 47.4, 44.3);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({ _off: false }, 0).wait(426));

    // t7
    this.instance_1 = new lib.t7('synched', 0, false);
    this.instance_1.parent = this;
    this.instance_1.setTransform(404.2, 183.6, 1, 1, 0, 0, 0, 43.9, 44.5);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({ _off: false }, 0).wait(442));

    // t6
    this.instance_2 = new lib.t6('synched', 0, false);
    this.instance_2.parent = this;
    this.instance_2.setTransform(299.9, 185.2, 1, 1, 0, 0, 0, 45.1, 45.5);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({ _off: false }, 0).wait(453));

    // t5
    this.instance_3 = new lib.t5('synched', 0, false);
    this.instance_3.parent = this;
    this.instance_3.setTransform(196.6, 176, 1, 1, 0, 0, 0, 44.1, 7);
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({ _off: false }, 0).wait(459));

    // t4
    this.instance_4 = new lib.t4('synched', 0, false);
    this.instance_4.parent = this;
    this.instance_4.setTransform(507.6, 67.3, 1, 1, 0, 0, 0, 44.1, 44.3);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({ _off: false }, 0).wait(470));

    // t3
    this.instance_5 = new lib.t3('synched', 0, false);
    this.instance_5.parent = this;
    this.instance_5.setTransform(404.5, 67.5, 1, 1, 0, 0, 0, 45.1, 44.2);
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({ _off: false }, 0).wait(480));

    // t2
    this.instance_6 = new lib.t2('synched', 0, false);
    this.instance_6.parent = this;
    this.instance_6.setTransform(303.9, 68.1, 1, 1, 0, 0, 0, 40.8, 43.6);
    this.instance_6._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({ _off: false }, 0).wait(488));

    // t1
    this.instance_7 = new lib.t1('synched', 0, false);
    this.instance_7.parent = this;
    this.instance_7.setTransform(198.3, 67.8, 1, 1, 0, 0, 0, 41.7, 43.9);
    this.instance_7._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({ _off: false }, 0).wait(499));

    // f01
    this.instance_8 = new lib.f01('synched', 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(167.2, 32.4, 0.901, 0.901, 0, 0, 0, 8, 12.1);
    this.instance_8._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82).to({ _off: false }, 0).to({ scaleX: 1.02, scaleY: 1.02, x: 147.1, y: 16.4 }, 4, cjs.Ease.get(1)).to({ scaleX: 0.98, scaleY: 0.98, x: 151.3, y: 24.2 }, 4).to({ regY: 12, scaleX: 1, scaleY: 1, x: 146.9, y: 21.8 }, 4).wait(406));

    // f02
    this.instance_9 = new lib.f02('synched', 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(537.3, 222, 0.901, 0.901, 0, 0, 0, 7.7, 11.6);
    this.instance_9._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({ _off: false }, 0).to({ scaleX: 1.02, scaleY: 1.02, x: 568.2, y: 232.2 }, 4, cjs.Ease.get(1)).to({ scaleX: 0.98, scaleY: 0.98, x: 553.4, y: 230.2 }, 4).to({ regY: 11.5, scaleX: 1, scaleY: 1, x: 557.8, y: 232.4 }, 4).wait(406));

    // 圖層 1
    this.instance_10 = new lib.tt002();
    this.instance_10.parent = this;
    this.instance_10.setTransform(358.9, 276, 0.963, 0.963);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(82).to({ _off: false }, 0).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 13, cjs.Ease.get(1)).wait(405));

    // 圖層 15
    this.instance_11 = new lib.sun('synched', 0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(192.3, 231.5, 0.059, 0.059);
    this.instance_11._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({ _off: false }, 0).to({ scaleX: 1.04, scaleY: 1.04 }, 6, cjs.Ease.get(1)).to({ scaleX: 0.99, scaleY: 0.99 }, 4).to({ scaleX: 1.02, scaleY: 1.02 }, 4).to({ scaleX: 1, scaleY: 1 }, 4).wait(480));

    // 圖層 2
    this.instance_12 = new lib.sun('synched', 0);
    this.instance_12.parent = this;
    this.instance_12.setTransform(192.3, 231.5, 0.059, 0.059);
    this.instance_12.alpha = 0.5;

    this.timeline.addTween(cjs.Tween.get(this.instance_12).to({ scaleX: 1.04, scaleY: 1.04 }, 6, cjs.Ease.get(1)).to({ scaleX: 0.99, scaleY: 0.99 }, 4).to({ scaleX: 1.02, scaleY: 1.02 }, 4).to({ scaleX: 1, scaleY: 1 }, 4).wait(482));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(471.9, 431.1, 20.9, 20.9);
  // library properties:
  lib.properties = {
    id: 'B250FA381CE8224AB50456BB8BD844E5',
    width: 580,
    height: 420,
    fps: 30,
    color: '#FFFFFF',
    opacity: 1.0,
    manifest: [],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['B250FA381CE8224AB50456BB8BD844E5'] = {
    getStage: function () {
      return exportRoot.getStage();
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
