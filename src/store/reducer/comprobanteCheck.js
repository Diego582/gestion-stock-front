import { createReducer } from "@reduxjs/toolkit";
import comprobante_check_actions from "../actions/comprobanteCheck";

const { add_comprobante_check, destroy_comprobante_check, destroy_comprobantes_check } = comprobante_check_actions;

const initial_state = {
    compCheck: {},
    compsChecks: [],
    messages: [],
};

const comprobante_check_reducer = createReducer(initial_state, (build) =>
    build
        .addCase(add_comprobante_check.fulfilled, (state, action) => {
            let new_state = {
                ...state,
                compCheck: action.payload.compCheck,
                compsChecks: action.payload.compCheck
                    ? [...state.compsChecks, action.payload.compCheck]
                    : [...state.compsChecks],
                messages: action.payload.messages,
            };
            return new_state;
        })

        .addCase(destroy_comprobante_check.fulfilled, (state, action) => {
            let new_state = {
                ...state,
                check: action.payload.check,
                checks: [
                    ...state.checks.filter(
                        (item) => item !== action.payload.check
                    ),
                ],
                messages: action.payload.messages,
            };
            return new_state;
        })
        .addCase(destroy_comprobantes_check.fulfilled, (state, action) => {
            let new_state = {
                ...state,
                checks: [],
                messages: action.payload.messages,
            };
            return new_state;
        })
);

export default comprobante_check_reducer;