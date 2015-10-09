| Method | Route              | Controller                | View               |
|--------|--------------------|---------------------------|--------------------|
| GET    | /                  | homeController.index      | index.jade         |
| GET    | /contacto          | contactController.index   | contact.jade       |
| GET    | /login             | sessionController.new     | session/new.jade   |
| POST   | /login             | sessionController.create  |                    |
| DELETE | /login             | sessionController.destroy |                    |
| GET    | /articles/new      | articleController.new     | articles/new.jade  |
| POST   | /articles          | articleController.create  |                    |
| GET    | /articles/:id      | articleController.show    | articles/show.jade |
| GET    | /articles/:id/edit | articleController.edit    | articles/edit.jade |
| PUT    | /articles/:id      | articleController.update  |                    |
| DEL    | /articles/:id      | articleController.destroy |                    |
