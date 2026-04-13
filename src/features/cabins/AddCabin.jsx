import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'
import Modal from '../../ui/Modal'

export default function AddCabin(){
    return(
        <div>
    <Modal>
        <Modal.Open opens="cabin-form">
            <Button >Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
        <CreateCabinForm/>
        </Modal.Window>
       
    </Modal>
    </div>
    )
}

 {/* <Modal.Open opens='table'>
            <Button>Show Table</Button>
        </Modal.Open>
        <Model.Window name='table'>
        <CreateCabinForm/>
        </Model.Window> */}


// export default function AddCabin() {
//     const [isOpenModal,setIsOpenModal] = useState(false)
//   return (
//     <div>
//         <Button onClick={()=>setIsOpenModal(show=>!show)} >Add new Cabin</Button>
//            {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}><CreateCabinForm onCloseModal={()=>setIsOpenModal(false)} /></Modal>}
//     </div>
//   )
// }
