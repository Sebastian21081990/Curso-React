import React, {Component} from "react";
import PropTypes from 'prop-types';
import Typed from "typed.js";

class Loading extends Component {

    componentDidMount() {
        const speed = this.props.speed || 90;
        //Para acceder al dom se usa $
        this.typed = new Typed(this.$loading, {
            strings: [this.props.message],
            typeSpeed: parseInt(speed)
        });
    }

    componentWillUnmount() {
        this.typed.destroy()
    }

    render() {
        return (
            <div className="loader" ref={el => this.$loading = el}>
                {/*
              Se hace referencia a la propiedad message
              del componente List

              Se pone que si no se envia nada en el atributo
              message se pondra el mensaje "Cargando ..." por
              defecto
            */}
            </div>
        );
    }

}

//Se indica las restricciones de la propiedad
Loading.protoTypes = {
    message: PropTypes.string.isRequired,
    speed: PropTypes.number
};

export default Loading;