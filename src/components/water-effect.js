import * as React from 'react';
import cleanProps from 'clean-react-props';
import * as $ from 'jquery';

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const useRipples = ({ imageUrl, dropRadius, perturbance, resolution, interactive, crossOrigin, rippleRef, }) => {
    const target = React.useRef({
        ripples: (_arg, ..._args) => { },
    });
    React.useEffect(() => {
        target.current = $(rippleRef.current);
        target.current.ripples({
            imageUrl,
            dropRadius,
            perturbance,
            resolution,
            interactive,
            crossOrigin,
        });
        return () => {
            target.current.ripples('destroy');
        };
    }, [
        crossOrigin,
        dropRadius,
        imageUrl,
        interactive,
        perturbance,
        resolution,
        rippleRef,
    ]);
    const destroy = () => {
        target.current.ripples('destroy');
    };
    const drop = ({ x, y, radius, strength }) => {
        target.current.ripples('drop', x, y, radius, strength);
    };
    const pause = () => {
        target.current.ripples('pause');
    };
    const play = () => {
        target.current.ripples('play');
    };
    const hide = () => {
        target.current.ripples('hide');
    };
    const show = () => {
        target.current.ripples('show');
    };
    const set = ({ property, value }) => {
        target.current.ripples('set', property, value);
    };
    const updateSize = () => {
        target.current.ripples('updateSize');
    };
    return {
        destroy,
        pause,
        play,
        hide,
        show,
        drop,
        set,
        updateSize,
    };
};
const WaterEffect = (_a) => {
    var { imageUrl, dropRadius, perturbance, resolution, interactive, crossOrigin, children } = _a, otherProps = __rest(_a, ["imageUrl", "dropRadius", "perturbance", "resolution", "interactive", "crossOrigin", "children"]);
    const rippleRef = React.useRef(null);
    const { destroy, pause, play, hide, show, drop, set, updateSize, } = useRipples({
        imageUrl,
        dropRadius,
        perturbance,
        resolution,
        interactive,
        crossOrigin,
        rippleRef,
    });
    return (React.createElement("div", Object.assign({ ref: rippleRef }, cleanProps(otherProps)), children({
        destroy,
        pause,
        play,
        hide,
        show,
        drop,
        set,
        updateSize,
    })));
};
WaterEffect.defaultProps = {
    imageUrl: '',
    dropRadius: 20,
    perturbance: 0.03,
    resolution: 256,
    interactive: true,
    crossOrigin: '',
    children: () => { },
};
export default WaterEffect;