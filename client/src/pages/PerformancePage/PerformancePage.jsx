import { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import DiffGraphic from "../../components/DiffGraphic/DiffGraphic"
import PitchesGraphic from "../../components/PitchesGraphic/PitchesGraphic"
import { AuthContext } from "../../context/auth.context"
import userService from "../../services/user.service"
import "./PerformancePage.css"



const PerformancePage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState({})
    const [marP, setMarP] = useState(0)
    const [meters, setMeters] = useState(0)

    useEffect(() => {
        user && loadProfileInformation()
    }, [user])

    useEffect(() => {
        userProfile && getAllMeters()
        userProfile && getPitchByM()
        userProfile && getPitchByDiff()
    }, [userProfile])


    const loadProfileInformation = () => {
        console.log('entrando');
        userService
            .getOneUser(user._id)
            .then(({ data }) => {
                setUserProfile(data)
            })

            .catch(err => console.log(err))

    }

    const getAllMeters = () => {
        let sumMeters = 0
        userProfile.donePitches?.forEach(eachPitch => {
            sumMeters += eachPitch.pitch.meters
        })
        setMeters(sumMeters)
    }



    const [data, setData] = useState([])
    const [months, setMonths] = useState({
        'Ene': 0,
        'Feb': 0,
        'Mar': 0,
        'Abr': 0,
        'May': 0,
        'Jun': 0,
        'Jul': 0,
        'Ago': 0,
        'Sep': 0,
        'Oct': 0,
        'Nov': 0,
        'Dic': 0
    })

    const getPitchByM = () => {

        userProfile.donePitches?.map(eachPitch => {
            if (new Date(eachPitch.date).getMonth() === 0) { setMonths(months.Ene += 1) }
            if (new Date(eachPitch.date).getMonth() === 1) { setMonths(months.Feb += 1) }
            if (new Date(eachPitch.date).getMonth() === 2) { setMonths(months.Mar += 1) }
            if (new Date(eachPitch.date).getMonth() === 3) { setMonths(months.Abr += 1) }
            if (new Date(eachPitch.date).getMonth() === 4) { setMonths(months.May += 1) }
            if (new Date(eachPitch.date).getMonth() === 5) { setMonths(months.Jun += 1) }
            if (new Date(eachPitch.date).getMonth() === 6) { setMonths(months.Jul += 1) }
            if (new Date(eachPitch.date).getMonth() === 7) { setMonths(months.Ago += 1) }
            if (new Date(eachPitch.date).getMonth() === 8) { setMonths(months.Sep += 1) }
            if (new Date(eachPitch.date).getMonth() === 9) { setMonths(months.Oct += 1) }
            if (new Date(eachPitch.date).getMonth() === 10) { setMonths(months.Nov += 1) }
            if (new Date(eachPitch.date).getMonth() === 11) { setMonths(months.Dic += 1) }

            setData([
                {
                    "months": "Ene",
                    "pitches": months.Ene,
                },
                {
                    "months": "Feb",
                    "pitches": months.Feb,
                },
                {
                    "months": "Mar",
                    "pitches": months.Mar,
                },
                {
                    "months": "Abr",
                    "pitches":  months.Abr,
                },
                {
                    "months": "May",
                    "pitches": months.May,
                },
                {
                    "months": "Jun",
                    "pitches": months.Jun,
                },
                {
                    "months": "Jul",
                    "pitches": months.Jul,
                },
                {
                    "months": "Ago",
                    "pitches": months.Ago,
                },
                {
                    "months": "Sep",
                    "pitches": months.Sep,
                },
                {
                    "months": "Oct",
                    "pitches": months.Oct,
                },
                {
                    "months": "Nov",
                    "pitches": months.Nov,
                },
                {
                    "months": "Dic",
                    "pitches": months.Dic,
                }
            ])

        })

    }


    const [diffData, setDiffData ] = useState([])
    const [diffPitches, setDiffPitches] = useState({
        "V": 0,
        "VI": 0,
        "VII": 0,
        "VIII": 0,
        "IX": 0
    })

    const getPitchByDiff = () => {
        userProfile.donePitches?.map(eachPitch => {
            console.log(eachPitch.pitch.points)
            if (eachPitch.pitch.points <= 0.5) { setDiffPitches({...diffPitches, V: diffPitches.V += 1}) } 
            else if (eachPitch.pitch.points >0.5 && eachPitch.pitch.points <= 2) { setDiffPitches({...diffPitches, VI: diffPitches.VI += 1}) }
            else if (eachPitch.pitch.points >2 && eachPitch.pitch.points <= 3.5) { setDiffPitches({...diffPitches, VII: diffPitches.VII += 1}) }
            else if (eachPitch.pitch.points >3.5 && eachPitch.pitch.points <= 5) { setDiffPitches({...diffPitches, VIII: diffPitches.VIII += 1}) }
            else if (eachPitch.pitch.points > 5) { setDiffPitches({...diffPitches, IX: diffPitches.IX += 1}) }

            setDiffData([
                {
                    "diff": "Vº grado",
                    "vias": diffPitches.V
                  },
                  {
                    "diff": "6º grado",
                    "vias": diffPitches.VI
                  },
                  {
                    "diff": "7º grado",
                    "vias": diffPitches.VII
                  },
                  {
                    "diff": "8º grado",
                    "vias": diffPitches.VIII
                  },
                  {
                    "diff": "9º grado",
                    "vias": diffPitches.IX
                  }
            ])

        })
    }

      





    return (
        
        <Container>
            <h1>Hola {userProfile && userProfile.username}</h1>
            <div className="PitchesGraphic">
                {data.length !== 0 && <PitchesGraphic data={data} />}
            </div>
            <div className="PitchesGraphic">
                {data.length !== 0 && <DiffGraphic data={diffData} />}
            </div>
            {userProfile.donePitches && userProfile.donePitches.length !== 0 && <p>has realizado {meters} metros </p>}
            </Container>
        

    )
}

export default PerformancePage