const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'offer.csv',
  header: [
    {id: 'facility', title: 'Facility'},
    {id: 'description', title: 'Description'},
    {id: 'image', title: 'Image'},
   
  ]
});

const data = [
  {
    facility: 'Skilled Teachers',
    description: 'As a part of teaching , one of the most important quality every teacher should have is patience.So the teachers here are highly patient..And can explain the same doubt number of times...!',
    image: 'data:image/jpeg;base64,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',
  },{
    facility: '24/7 Service',
    description: 'The platform is available 24 hours and their no no time bound for learning over here',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAACtCAMAAADMM+kDAAABPlBMVEX////m5ubl5eVNTU3/aQDk5OTj4+P09PTq6urw8PD4+Pj8/Pz19fXt7e3p6elHR0f/YwD/XwBERET/XACFhYU8PDw7Ozv/WAA1NTUxMTH6fkvGxcXl6uxbWln/awDj7vFubW33gVXOzcxSUVCpqamSkZHZ2dn+rpf/eTtFTE5qaWn8zbqampq6urpsa2v0p5Gura3u+fw6S1BgYGD+18v3ooH+9vL/8er/TQDvybzzr5v9biVgTUn1vbDxwa7q19H6jWR+fn7ZsqiCUUH8eCb8fzj2o4L3nXbq39r8f0/22835lWr9v6r9axj+4tj8by7ws6PuzMR+QS7IakYQDw+zVyqaWUDrYw32czzQYiitXzuQWkRzVkvwknPenIjcYB91UkXFWivyiGSvVTTselHbwbvkjW8mQUhbPDWwTRMU0lrGAAAgAElEQVR4nOVdCXvjuJElZUkkeImkrMMWPbRlWT7VttpX246v2cR2t6/2bjLTOTqbzM5e//8PLE4SAEmJOruTRfLNcJ5AWigVUFWPhYKiwGYWVLWgoStdhVfowhgGqRFkoSsnN+SgCwtBBrpSI0gNgtBUTo9294+/3iz/9rlI229/t3Z8fHd59ukEPStQ1RK+ET5B1dGFFj1LhEx0VYIXNoNKQyGQBinfjYy068v7G7fRqHoubEWhIcTzGo2tm/OrByc0/9/JKAiDk927j41GQjTJBkXVqH6824UqFcxZRqVCgY4eXpTwuCBUiqCCCDkQUSPIyg+pECIyQhAeV/hw9njR8DjxEKWpNkiregm9QoK6eLx6CAMy1OhZaBhURhAyGWTnh0AapJiwGbpt6xq6stEVurCGQfaIkIUhm0IagZTTp2Uog3jscD4V127uzy+vrj59enEePn06u7q83H+82WoIcoSdPW9r/xr+vuxZsKELED3emAQyIgjoChKczn6OMhZhGUJ2BgTyQ8oACKCLh/3nKhMQVI3G8uPT2QOcebgXmkq4Fwhgg/8+3f38tSgKym24d9ch1lCdPd4sRxMgFSphyIggB0IlBpUtBhV4SOVn5/A5nDphh0BAgEwCmU9bjUg+1efjq2vcC34d/I3N6Ea7QCEF2r3gbXO54Qliej4/4XuJaysZff61NX25/RYyCsK3mw8ek8/F5pEeBoEokBQZYQgO4uTo/rkqiOnmZbYyKkTrXIktV1OaaxEEIgirQ6g+XRAVcqvuze6pghdI0ssW5geVURCURKgfvAlichtrn0KV3igYmxRooEmKjI0AaXNu/dNjzyMCej4+MvrW8Fv2r0CiV994+4WXUnXtU55HjdWUXIKWoISgc7sD4dsaViFole7fiH+UdAdEyHz54DWuVQrFhl4NC/tuldOlj6dQl1LmxMBpUsoxJ5TkHJ6hD/npI/7t4dw4C0JVikVSwhO8RN65xWq6wxiEu68NTkqPalD4B/ezX5axDlW9zdN+kC6QNBm9Ft3HdBkhgRy98rr0ORzB/owmo3KpxByIUqnMoDJ1IErMgeAh6kCUUnyKEoFU2EtlNxb6L3iWudWtXTR6eCMVCOxFBIKeRUYPn0UhePnSKDZeol4a+hLEqYYNi233woukVH39hHuhYZApU4rdPwZBh4jOorjXIEjRYaOuL2zE64QN5IfAAMigkHL6lUgImWna69MDujK5XvRGAVI23eJzGEFaspelPHEeU+MxjPx8vpcIWaNA2D+KtHhMZRzuH20SCX19iT2fpw/FsDDYGcLQsuvuB4N6QdU2H7llqfgWUmMj9cIQsz/wswgqiJADITWC5uJDqv0n10OLxfEDP9SXaiMc4jAi6ORDsXqtDpGRoly/xhOusd/Ho5+Nnz0LPQofvlSRhL6WwgIXiygnXvUth4x2veJrOMz1hlC4H6uSt3wi6NGIJilhbGYX02IogN8dTrPGzQNzhCPXe8u7ChJOdcLPvnG9z8HAXkRGpfD6IlqV3OqnzDA3CmDTIGZ/CgUR4o1YfrsWQxaDCiKEbFF4hKZZdes6jIwY/oWgEQv2q3cSVGJ2LTZ1QbVYPSVGTLJrZQHCP8h9rErQC4jMky72ii3WEKhMIWUcZczpH8FA6yv81p57FqbwkMFbdVkZ5h8FZ567RqGBpCPh685iX6l6j4f2vfuQ4ZvroqXaCtQ0rvah4Q2VUXjveru5ZVQKHl6j+ebdTFdG+QPjEbja8B7+qtXllyyuNnxunA6L18LnYgN9ZZGdIDJKQiWouWuRfXO3TqbE1RqwWYhC1eCFCTCZOgyyc0DK6QVSoifFTOulwX+Hx40jU4RsS+p1XXUfFfnGuBdIQv3jaFFyLwzEwnK90GCNFMgeCM3KroWf4VetfjkJBnC1u439wRYLKOdu9UxNUkqDiNnwKRbSc5DsJdk1gastJeKqGXK1wQ2cZ1CJsrlaNNQPa4M9H6C8utV+DmpSgMIzTkjoL36fXK397Ba9rVNlsIz652/BEBndN+60EWVUUMM3brpNQ0azmGuXSImOlWSvCCJDDdShPuRJKn2b5kNyUMBp0vL3ydVeoaVotz+DJ+dt/afIUfIeJ/4iClHZ0W1/NlcbrnnVi5PM97TEqc4gZrOgQiHB1ZYKCRY2hsLjyE+qkghXpG8HcbUJiMhouj5kYf9KhvLkjQyDhvuQHBS+xmHJGev1PfnZgfHNZaQ6XOx2Mg0ZjRHTSgFsRkyrZkBxAMtztSkxLUfMZnG1YrTKIG7dLiLjpqWxsONwtQ6mXJ10CGRAID9kpkNGfkjLgOwEpDzGodt935HoWydJzGZCc+JqKYQ1dBA09F32MP/o6CUoUAhwzORZINK3hkDffnuuNtOHnLaMAuXpufHBiSCOKXGd74erdch3+QYyUkP1uIFo8/2ADTVci4nJmz7TI1lGSSiNqx0l9yuVPGAQ6LZ6nU6v1QXAduJeIOpFxjUAsseA8Lj61zc0Vec5ZDl56kOsSI1dIhDOsSsMcv8kx24qXK0Oup3VerPmo1ZbOuzYuFds1xJcbTaUz67FXG0pCK+iZKZi9Sg2dZtc1kQwMlfLICKjyf2j9mrTryzEzV+67drz8Y/6hfPneHkuNs7jtdWMFcnbD7+tD2nfNnkB4VapH4DCHGR0euzxOTbPdwpnf8452/Ywd66Wj9c6SQmhVt/QZhivFfB6eHTTiCXkVW/eQNQLDzWWkfsYToWrNQDjKkeAzNVamoRgq+0hCpUQoBojQO1BkBXRpDkg0L96jfO03MbrE+hLvczPvCLlfLwhQVPgjw79DBEtLDS76iD+aBgzNACCNsPc9GJ+3/OOr8OoF0fMcj7Sxwyudug7yIl9yMPUeUbboTYT/0gNwuv7eJLBOXYVBuk5o5xpa7zY34arXc3WIrQktZwZyAgEZ2uRhOAc2zzJzqs94TJKHvvfhKvdy1qLSKvcghnMtauLapTa7X79lOzFvyqJQ9ti9UEdn6sFsGmWBv+PrqwI0tIhwCCr2xwoIugnoX7JG8eBNAr1o7w1t7G8a/STvSwO0t44RTrup/bSBkMK0eIxbb8yaC3CrVmauu0PafZ71b17YNouc7Uc5RpexP6lZypZXG0hydUySEnO4RF8yI60GFVqNQmptabuQwZ3cPZ4jccztu8og5qkq2awzzlQT8q8/WxTmmn123a3JS5Q/sH0/eyHD42tJxMasnz71665QGVrfBmNydVKalTrog97Auh3+MgXrzT4T9oA4G8wTkwbnJ4qQ7naGOLo/yLKwhiLq3UIMetw/GoaBGQISEtPG6BeRlOUESA3Angj2FiUW9cUHo96RZRrGpTkaikLm+zFICH63w+SvZwUKOJqnYm4WqctTKvKIiXUxLnW0SNnSD+oV6S2RDe9TI2rFZNoCfQS+9rFizDJ1aoFERK42sl8SHtRsGpL1lAZJa3gij11GUk+JGrcRq7G9UCHcdpcLVgR1OiWEbPCXKv1HCYjey/hkkMXcw56xLuRNNc7TY8KnB4lZKRKelQYAIEYKtUFYbRJL9AV4HrXoVs+1XLS3/QPHPbbqzQSo98Yq0M+SBsKXXKKtBWOrkf4IWNxtW1BGEs6eQdpHojawm40lMXkVGt2x+dqRWhgEu1p7GoXP5yU5sjVSpYfENkrt7woKu/YjUZpKSGi7X89ndm7bGFt5WTkPQVz9CFXBWHcMhkl3CNyo3KYENHC+3+b3ft+QUZr3IL0GI4no7HyatdFYejEXoozEIUi+EanJeCk/ebrhFxtIq82Yx/kMbcguWEyXpsRVwuc3zebzSXYmqj9vgVwL0Uwdgs1QAlQIymhhe0/nJsSTarlIlNHhcwz/r3JAxjxWRPwRzCcwFplRXFFuWCLK3ZlEfbHNx6k8Ezvq9cq3aoNG36R2kdXGVD+XD851bbwiV+QUDrSnLlaAZLse7OrEnttpcy07Z+8kDgwm1+WYVuDbZldxFfs4k4Z14c0CgEnI/dY+aZ5tUBcmKFVo+PaSGF03//8hcpomez2Z6VXXOGKXnibE8go5OZaMZlqO8+8WlsSBXR/SC89TY3+Bn1ePBm4t6nZrfqSRfIOn2vlcJl7kpsx17K5Wgs2SkzCRmjSMSGjJ4qismqSXuZtCl/5/o/em4Fv5FeLbBnZY38vYPVvOMNWvaafib2yIYWo7DTyavWW5CUuFajKttNY798Uq4hqVQvBpZctmniGhKPk1Uq2n4/Y4KIdzJOr5RlGvSuJqHZgU7dyJUVE238qfkCfqWrADyCruV/DCXxInkIquufB3PxsUUZ6V1pzKquA9kpzHxcWiu4vREbCYpHVYAgxiYx4VXWPw2+TVwvaCQcoKNBolVvIK0yltv9cdD9jGZWCPMuRd10YLa9WhITp/LswO4BN5Wod2CgxCxthYQdAQIAAg0BCV+othfQCfOy7skFX7+2f0boA7zSVT3nMWkMxDfQXKZnqMH51GKRgSFzyXkd81lTyagugJ6/K9Y5Ne/E0U63H1OgvcNgBcWByLdlfJuDYzJIoo4vhXK06Ja42hqwNWYv8RY25lTxt5DN/+/0f4c/ZJzK6z7NkH0/A1RqS6XRP5p5Xq9mJBCR/1aAmVOWXcr/TpT3XkaWiu/dyiKiINh5PTY+809H1iBKz6EriapMQSEKFddlDrBzatJep8SxTzaBr0/Yf4De91IjF/OB5Vdg83NiVJKMGKlSiJhldBInErJEGBTxbiwoGxL1ipcmAppBXaycNmn8YZczqPJ3k75k7RGLv0Tdtk14PT1dXu7BdobZLr85eBRG5y+Go+0UG2DVoI+eZV1tKGjQoIifadyS8O6lrFhHR9k9INQJWizUgrypQHUj89eC/H0RbB03gRDyk4ENCGanz9CHBQVJEO7rKXu7rPG1UWVTocvT+Z/hNl8NsYjaU1vHncDKuVohFxpTR2Lk1KSK6BSoL4VTAz8NmSemR//7LD3D6/DXIzK3hN5/hQcHoYSKuVrlJldGgeK3ExWuT5NUqCbdoob5hxr0s/q1jZVVRyH+//3f0RS9BzPuKXC3QNkU18k7AQDJ1KGR+FGT0AObF1RbspIiaHTPqBe/no9x6W9V28NX6D0WcwZGd2PcsiAjGs6m9RuCPBDuJ7NqcuFo7uVzXWoDvJdBGO9DUYzVChh8uMWZ2zuiRONUan4bX0RrCQzZkGc2Hq3XaCed6vaxzvRQhWbLWchziT25jLfk4IK92WZxqy3nqaA2SkfowmYzGn2sJJbrVVSGJViC310HBwS9NsOEvuueZSbSFU2nFvspVR2vQe5GzMefahFytKeeuw9Xa4HuZwlT0e6Zl4qAfG/5i9U3Lenz/q6hGrjkhhwxQqVJeRg9cLyt5owwpRGVHtv1AftOxdACkDTTCxxWEIMXa/tsPWDm6atZL2RPRf3Q3ldFrIEi2X5S6+5DD9k/O1Sa462YLSNSk8NbRR/bOQgiK+IuIns58uf8kBmt4d/6E7/slqT/Mxc/WpSCt3gLSOmcJPWqogC9esrHhL7o32TKSDP8a6zW+jKQF7iIYR0ajxrS29DKo2QYyfSvMRX9PhxBasrf/Tkb+Y5C1V/RI/NFRxM8lG1ljxLT2kaiZrwO42jT6lnC1imkqmuo4KmJhFTUBmREEECQlh6CJZrJeAPdyxE0SdQ3eCJBg3xMtqb4oqBd8lnwjt5ma/Oj9qJdzfXFsoV42gwz0bbQIUtIh81hcjtYUqZcj3qgLEPWPRuRqC+a6KKIekHsBITnJ30A3Ig5g+0/UtPSVdP9IcmWK3m7cK3x2PfdSGT0f8kJ4JDICM+dqbTGDrbahJYQrvnWslxE5hxLZcKiG1D2a/JKMAvE3Lza4cyHu0JSpvr6M6kPK/tbTODkRI+pRIObPrMJuUi8lkXILZ1Grxgw/yd1Il5Fkgu7i0TOfoHFvByPpkWQo0eb20fQITVpu8YHLBFqPOMgUILgeATGHeJ0sK7AXWlZUvKz0BKNW76LFB6UeMzXyzqK1DTO60Y3aecLw29GXWKafuY3LMICDoH+RLCt4nYSQIUHwQlrhUG1X2gv211VHxb1EyImg8bha0aoTylV4LWkLVq+yCrAtgkv2Ovua12p6DQRF4mhvQj6JdpNNmurWS267VihI5Lgbzj6v9kC06iBRI0pKVm+2HayyzYX3f2fq0edIR84/CqSIv3oWCDmjL1tsvI0bNee+o+BKlJG7HM4+r1bMcLAT9djUsriP5B32L0ywtLDNvuYvSuA4jLzmZBRKET/09qS82kiV3Op5ODgFgA41vJHCP1S0ZcZcrZBn7bcM3ElB4SyZuZopJqv7nVYPttaev/3TD2wK/Yja5efLz59//PFBZfFawvB/DuS82v5DpEqe+yZVo0uL11RVmmootWbE3JooyEVhsoGjXSF8lyFTnEiHK8kmRbs+bTTix0LiWqMfPb5/J/3kWsqX6EeqBCfcaZ+L1aWvSiDZChQbOu1lSEF+JjQyf6Sl5KLna9v/8kMx2ZBHFzFD0sqBPYQky3S6FW86vguDIfzRq/QHn7Haz5SrtYftxM5szPBLPyuI/SM54sdbilP2HfXPoxIa7vNZX+wl+ZCSFaCCnylXqyVfy+Ztv0kTkfuVG/2W+NGaNPrY0yTnKJBWXT4dJCM5SQ6nZ8+Wq7Xkrdj51ejvxZTWOIpnkRTxV89SZhHlatXwPC5J27gzsw44kHlf+Aed0ecaWtjImm1wq14ahNczM2WHVU4ZpYmo+KUfPb4v/eTPtLpB8ksgqO/EJ4q41ad+speFeu1LagSV0070MpKQxUEK0eLctl8ZLoz0tv0faSu2dxm9gbVkw38+eE8NVKW4sI+3hWimFNsvqxEMaGddA0HyD0dRo5+LKc0zoy3/8k/eMIftzQoLH7midPdGig+5KSc3wQBw5BS0EWXktMaUUYbhP45jEUPyje5z7F/rc6dBwQkXyjIyE+moW7OvgaCPu2RnGP7TOKbd9eSP8tSrPeVUqboVSDFtQo0QdzR6XT8xjy360aQ8tghaHXPJTjX8xV9Dyo3AUE00/EUYecZJa+RdtpDHRiEnvIxVCRlJLo/NcRLZqI2CMzBpLYKcCBqdY1uQqxjkaEiN/pAmIrhiR57PdSLiz7l3PdA/sltfWS8yVDmLCVm1sCARatPnasFtohrG8PYOCon7os+//Prrr2try/CfYTRUOTp/DlIFkv6+f5cU1cKvULi96w+JxG8seTz6WXK1+BxpBT8JnYudhLAXZvGQtlFhVD/+Lf/aj3Y4xkNNZmWNICPlBKkSiTJiPeqvyWpUdIOE0uTkaumLIif57shJvjtKe98zGDJrguH3/lOnxCzhanGvQDL81ROHPcsWHq8l3h0hCCWFel6gRBAaxllCjdy7kHsrRHoJ744IJL07wkoy4zrsxtL2n/nho/AqUa9WMvyPOCtrhDrsysn5qcjVhrKE6J8e2a5NcW9WJtT26Tt+0i7w6CWudlcK1d70ZK/R3mWHd8mZdoNHO2sfchwZ7fl/4fxH97/SZCQZ/i/hxDUQHpK7mapv4231IDKayj7IrOPGDgXD7/2IRy8UPNBfpBX7MpjwfBGheBZry6EYiY3E1U5pP206ZNS2+S9avTYSveSI3+tP+iX6MkNbRGmVaTcOytFi+2mnuS87DVLb9Z/E8ZcSKXspWVkjlNVMYZmsl+RMQycfjVqvtjRpXm0+SO/8Nx/xu2tSiX90kZKVNVEdLVUTsyDIU19yrK1TzqvNCWmrQsTvfk6RkZSVdTNAILlkFH5N2DSsRt/T2WJ8cVogRvzeUbKUQVpW1iRzjT+iRnzqmLWhJ9kLwe9fSNnSgEvGlP9H/Kpholdfejm71Z+wbk0yTsM7CseugaMQlZ2d7T/4X/6Fo/sllOvVqtcfhB6Np5i+HWT7s/fUpG2sJCWPR7D98Z6a2fuQ7c3NzX3YNjfxxVmQ8A7Pog/JxaR1tG5SZORt9nOF7N/Kz1ZMfvdecvSJPX6TyKjQ30zbCv88ybZzIqPJz2CZ6GyxKdb1C67SKio0jsY5Lzudq5XrQyYhMBoUV37MBwllHnNCGg+9pGmRuxbm3GCcAk39TKhUaF7nZkHoNLWegudkE2oDObY5+ZBzldFJmoSKjasg79o6tbza8WUkDnXaMiooF2lmH+27GFOPeK42f00WEYpqstBTDGcKDaujostbBJhN08Yp5oIuLFqTBf8cM+VqZ2jXxCTadBFV32yh1xBi9ttwtfM6e3Utfb3eDyc1Sf88MkoXkbucXTTrO+Jq53EWtCru4BfNfsrWyO+Mq50HpNmpFg2lVGqpN45W+3By/sgAtlOg65xt49/YiEvY6oBBtkNWPxVQKOJ80EkaOqC9qM0oOXpKLwJZNnAE/uikmCGiK75XKn8UQ8IEmCZXa7Y7G4sbB/hkEaUkH45xW3Z6UYbAXo8MtYWQ24PIPyI9OpZFelI70u3tQbBlUGfoQEw0uG3FZRE05SWjWln1PKUw/Zy5Wt3e8+t+pVLxm+/Qp6XAl4/G0G5jqFZfRHf20Aka/mIkoxru2bbaTYRvYBl139V9eKNfq3VQ0FiS81WWurGM+rsZRe+8e3pQxqQymqTeSDs+3ajiwyW11JWy3HzFFnaX+AsmPcimsshmEcmMWwEkY9c/QLNoIz5gsnYLkMJL28B9lc01NdzPqJ1YfQzTUm3nytUqLSGdvWLaprhvbaFya0gp75UVU6MyMsizSGmtWs80cfpXvWxCiE+Wqx1ApCWlz+0orCLNyXLWRNtUxiFmp8vVFujw6U9e6zm0dg+bF2jjFk15J5laSAY9QGUEiAmnNe3gl6gRzVOURVEgqHxCR3hwxd9jXO2Ll75aFxv7Cp0AOWw/R8xOl6slxTT89dV1PIDKoq1gnajsrL57t/pudXVnpwXIZrfD1dVVIqXKoiXKCOd7ozE7WOSHkdTqO1SdmmWaYljZwY+FbadFyaojdyu9vT6Fw/cszNrP1kkh6PoBYEmSh5ZJxEBK2KMTAnW8X32h1taiXiumICMNP6UJP8bTCQkLb9qpHMJVs+wTBaXlXJfwV9ZoUnnkZ6fXtw+GC2TmXC3Zf1Q7sGG0Sn95g1Sq3wFxAEt2jdYKKKYtk14mXqShjHBo2mELuIILttRatCKQj78olrDfozXKDxUl9bzsHHX9cse0Q7ha3vZnQtFZPioeygqC1C697jFViHrZXK8yvaYywr1sMq1aDq0AWO+CDSIXGwVh5PrApqpnc2f5SBtoBkHT9Y9GUEYiD3TECnDwNKlskLUFHSkS9WKf0L3reB87JyOaEr8CfSCArXvdIs5CHfPTBjF1bbJB1+85ed5lC+xZCpTJsUUySgTj4/qQRB5tBOl4CHDZOCTD43qRT1pxLyhVTkbgHTH8ukoOc0M1t7G2rZMlmaxHDqnjVm/nkpGgDtPTo3G4WrxUNNGjgH27cni4st4lp4pV+F47xOdBkLaOV+cuJyNazNaH4yI1tvwOKVtKzrtTuwto6+mOpmNZ+fYQrnZCPeK52viMOuRDjnnWIV1OOwoiUy2y3RiPGE6m+HxCBcughgujEBenorA1WzEBXXv2FEcHdJ5qRNsOFHzMIB6hpXeJjlkOO+sw+2DDsSA9A2JnHeKvMbpd00mx8PqBpjKu1qGTyUaFwxVk11RS3wYOzgEHxFwdOKSELbZr5FzSeheZJ7x4L1kKdRZIzig1YpEtgN/LccapV5tu19KI2SlytQ6tulJb7eFHwHWOnH1Y2ejsof8doGMQyBmjq53O3iGNUoBqMxmVyFFtlVsAZUQCMp/KqlYS8mrJgxc7qO0d6GPUYv02PiSgNesqtUqLyEij8QLeqF7fQzKilenRxnWiJ12HyWgV/m2fLsVQRmwZIuZt3RK42kPuwbVFu/RNZDRGvKbaUZ2o+qqJ1jmHj82hLXNK1vqC0PwWfJjOZBQZfsTCdgSjt6HzXK1QtgzO1jHOFxmLq43mmsaf3c1dDYXMdo0RGP66oQFNiM1rZQtoQGI0Dk1EnFIrb5o7ZMwWOn8LL0P1rkk9IYv704ZwKke9q+X8glODJuCP9PIqo3kQYyaefehrsJdMJ9Xw2kVUZVUhfncd6XEZ4HubikE8oTKf2OcID24aY9SrTSdmU6bJ9Lla0L6lmhLF5nAtwe0dKj9GBof+k2gCPh0yklEU8SsmdZQO6QncS8KLa3ArPFj5Nj7k2Hw2UFTKkMCghAwPf2YFNupFpNBCO+QJHVnjZYSVbAk91XR6NGYhkd+OICMSndQAyvAKLFEg85HR2HMNOnQYwiOIps6KEfVijAaeMu2IQaMyuiWGfxWPy2HRTOQJwfnhOEQgZRqdDMyrzZhY43K1pYirLY/L1ZZ7uJkQAmTI70zK/5hxLwdPoBUF3VjA1xV0A3Esb2kMhh9PrHuzqxHHG58tabbx32ib1C2wpnpEZAQZwyGFqOxott8+aBIXCEIsnLfo8Mxo6dMZuQ97qdSY2dDG8sUlV+hLWTJhbTIlmyUVuQO3NfhHlloKexcwSa36VGJWSyNmp8XVAsaHQUinno1JhufEL/cZoxH3quzBsJSXEYzL8Jv8MnWZCN1Us/D7frJe6Sw6cSY582D+frZFpoaNIMZb6HTBiWVkYUMHLR6EWMjqiDKqGYTj61EJEm1DxwE7lLZcASbhhPWJzoWYP1erEZ0BEGLV2EGXMmhxspGFP6ib+KSWdXxHuSAcy4LqjyJGl3GPOl16bMTCEmJhT6e2QCtL+Uez52rLjKstDJqwGS9XiC3zezZQNLKS7CmM/8GGR3OgwpADs3YAMuH0EA38i8TlOOpdWkGU6SVxOrGH0MF3LwEu6Eebgqntp6tmvJCmQPoAKMcxzkqGD5lTGam76O+19kj07zsKpYJapPV6XZ2GXjaSEY3RRBlVVjUiI/JyZJ2R5AsrvRY5ZgqJBj+4stdukdJ36EX/FDi2QUvJVLhaFnaweFRgWIwAAAE9SURBVL7Z02lFRBib13xsjyLy3kEy6sQMUCwjtDzhQeDphCVIow7fp0EO/OPkvI1KrUYq3y11/zG4WgWIB4dvaAUgh2a2Rn0e7C6vsrcBwlxDhW4RchC9PxCLBvpoPFJcXDcm1CM61zgoLq/B5lqSq9UJMYuuGDGrgwGQYygd7jV+c8/SbamidmXHICR0xcY3ruPhFXDGLJOR3wGU0aXWXTFNYyWu+eJXUJ1b+SjOQ0QF64xyRV+Q8Ku5IT0DsjIh/MuOztWCzhKZDpX6ejtSBU4D9pRSNIGMUpd63MJxY0ssr5YGZNDolQ1jh3AJFX9pw4R/0ZEejIzeeFxtTmJ2ilytXT64hcvszkYL4G8s1fzxW9wLOMPpUZYRrYZM5fBbN5INSq07cXO6G3CSrtx2AOYh5ar4/oE+d//o/wArXepXIcLoOAAAAABJRU5ErkJggg==',
  },{
    facility: 'Certificate On the course',
    description: 'Inspite of the free courses we povide a certificate on the completion of the course',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaQaMa4n6jPLIjtCQNScGRLPaEftAZm0XJg&usqp=CAU',
  }
];

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));