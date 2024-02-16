const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users', (err, userRows) => {
            if(err){
                res.json(err)
            }
            res.render('users',{data: userRows});
        })
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO users set ?', [data], (err, rowsData) => {
            res.redirect('/');
        })
    })
}

controller.update = (req, res) => {
    let id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
            res.render('users-edit', {data : row[0]})
        })
    });
};
controller.updateUser = (req, res) => {
    let id = req.params.id;
    const updateUser = req.body
    req.getConnection((err, conn)=>{
        conn.query("UPDATE users set ? WHERE id = ?", [updateUser, id], (err, row) => {
            res.redirect('/')
        })
    });
};

controller.delete = (req, res) => {
    let id = req.params.id
   req.getConnection((err, conn) => {
    conn.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
        res.redirect('/')
    })
   })
}


module.exports = controller