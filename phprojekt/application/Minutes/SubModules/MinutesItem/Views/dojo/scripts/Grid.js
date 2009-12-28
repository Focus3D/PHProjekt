/**
 * This software is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License version 2.1 as published by the Free Software Foundation
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * @copyright  Copyright (c) 2008 Mayflower GmbH (http://www.mayflower.de)
 * @license    LGPL 2.1 (See LICENSE file)
 * @version    $Id:
 * @author     Gustavo Solt <solt@mayflower.de>
 * @package    PHProjekt
 * @link       http://www.phprojekt.com
 * @since      File available since Release 6.0
 */

dojo.provide("phpr.MinutesItem.Grid");

dojo.declare("phpr.MinutesItem.Grid", phpr.Default.SubModule.Grid, {
    useIdInGrid:function() {
        return false;
    },

    customGridLayout:function(meta) {
        // Summary:
        //    Set a different layout for the grid
        // Description:
        //    Set a different layout for the grid
        var deleteFields = new Array('sortOrder', 'minutesId', 'projectId', 'comment');
        this.gridLayout = dojo.filter(this.gridLayout, function(item) {
                return (!phpr.inArray(item['field'], deleteFields));
            }
        );

        for (cell in this.gridLayout) {
            if (this.gridLayout[cell]['field'] == 'topicId') {
                this.gridLayout[cell]['rowSpan'] = 2;
                this.gridLayout[cell]['width']   = '9%';
            } else if (this.gridLayout[cell]['field'] == 'gridEdit') {
                this.gridLayout[cell]['rowSpan'] = 2;
            } else if (this.gridLayout[cell]['field'] == 'title') {
                this.gridLayout[cell]['width'] = '46%';
            } else if (this.gridLayout[cell]['field'] == 'userId') {
                this.gridLayout[cell]['width'] = '20%';
            }
        }

        this.gridLayout = [this.gridLayout, [
            {
                width:    'auto',
                name:     phpr.nls.get('Comment', this.main.module),
                field:    'comment',
                type:     phpr.grid.cells.Textarea,
                styles:   "text-align: left;",
                editable: false,
                colSpan:  4
            }
        ]];
    }
});
