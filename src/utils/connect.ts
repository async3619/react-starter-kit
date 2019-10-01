import {
    connect as connectImpl,
    InferableComponentEnhancerWithProps,
    MapDispatchToProps,
    MapStateToPropsParam,
} from "react-redux";

import { RootState } from "@root/redux/reducers";

export default function connect<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(
    mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps, RootState>,
    mapDispatchToProps?: MapDispatchToProps<TDispatchProps, TOwnProps>,
): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps> {
    return connectImpl(mapStateToProps, mapDispatchToProps);
}
