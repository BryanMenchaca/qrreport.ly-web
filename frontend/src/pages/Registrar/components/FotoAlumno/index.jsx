import React, { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { CloudUploadOutlined, ArrowBack, ArrowForward } from '@material-ui/icons';

const baseStyle = {
    textAlign: 'center',
    alignItems: 'center',
    padding: '100px 50px',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
}
  
const activeStyle = {
    borderColor: '#2196f3'
}

const acceptStyle = {
    borderColor: '#37EE56'
}

const rejectStyle = {
    borderColor: '#ff1744'
}

const Dropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0].name)
    }, [])

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
      } = useDropzone({accept: 'image/png, image/jpeg', onDrop});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject,
        isDragAccept
      ]);
    
    return (
        <div className="box">
            <h5 className="font-weight-regular mb-4">Seleccionar una fotografía</h5>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <CloudUploadOutlined style={{fontSize: 50}}/>
                {
                isDragActive ?
                    <p>Suelte la fotografía aquí</p> :
                    <p>Arratre y suelte una fotografía para cargarla ó presione para seleccionar</p>
                }
            </div>
            <div className="row mt-2">
                <div className="col-md-12">
                    <small className="text-muted">
                        * Omita este paso en caso de no contar con una fotografía del alumno(a)
                    </small>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <button className="btn btn-light btn-sm float-left">
                        <ArrowBack/> Volver
                    </button>
                    <button className="btn btn-primary btn-sm float-right">
                        Siguiente <ArrowForward/>
                    </button>
                </div>
            </div>
        </div>  
    )
}

export default Dropzone
